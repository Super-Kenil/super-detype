#!/usr/bin/env node

import chalkFile from 'chalk'
import cliProgress from 'cli-progress'
import fs from 'fs-extra'
import * as os from 'node:os'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Worker } from 'node:worker_threads'
import packageJson from "../package.json" with { type: "json" }

const chalk = new chalkFile.Instance({ level: 1 })

type ChalkLogType = {
  error: (...args: string[]) => void,
  warning: (...args: string[]) => void,
  success: (...args: string[]) => void,
  status: (...args: string[]) => void,
  info: (...args: string[]) => void,
}

process.title = 'super-detype'

const versionFlagsList = ['-v', '--version', '-V']
const helpFlagsList = ['-h', '--help', '-H']

const HELP_USAGE = `
${chalk.cyan('HELP:')}

  ${chalk.underline('Free Meme:')} https://raw.githubusercontent.com/Super-Kenil/super-detype/main/images/get-help-meme.jpg

  ${chalk.magenta('KEYS:')} 
    ${chalk.blue('INPUT:')}   Typescript project directory's path which you want converted to Javascript (required)
    ${chalk.blue('OUTPUT:')}  Path where you would like store your converted project, directory will be created if doesn't exists (required)

  ${chalk.magenta('USAGE:')} 
    ${chalk.bold('After installing as global dependency:')} ${chalk.italic('super-detype <INPUT> <OUTPUT>')}

    ${chalk.bold('Without installing:')} ${chalk.italic("npx super-detype <INPUT> <OUTPUT>")}

  ${chalk.magenta('FLAGS:')}
    ${chalk.bold(`super-detype [${versionFlagsList.join(' | ')}]`)}
      ${chalk.dim('(Shows current installed version of super-detype)')}

    ${chalk.bold(`super-detype [${helpFlagsList.join(' | ')}]`)}
      ${chalk.dim('(Shows Usage information on super-detype)')}
`

const Console: ChalkLogType = {
  error: (...args: string[]) => {
    console.error(chalk.bold.bgRed('Error: '), chalk.bgWhite(args[0]), restArgs(args, 1))
  },
  success: (...args: string[]) => {
    console.log(chalk.bold.bgGreenBright('Success: '), chalk.bgWhite(args[0]), restArgs(args, 1))
  },
  info: (...args: string[]) => {
    console.info(chalk.bold.bgCyan(args[0]), chalk.bgWhite(args[1]), restArgs(args, 2))
  },
  warning: (...args: string[]) => {
    console.warn(chalk.bold.bgYellowBright(args[0]), chalk.bgWhite(args[1]), restArgs(args, 2))
  },
  status: (...args: string[]) => {
    console.log(chalk.bold.bgMagenta(args[0]), chalk.bgWhite(args[1]), restArgs(args, 2))
  },
}

function restArgs (args: string[], startFrom: number): string {
  return args.slice(startFrom).join(', ')
}

function showHelp () {
  console.log(HELP_USAGE)
}

const filesThatFailedConversion: string[] = []
let startTime: Date
let endTime: Date

const params: string[] = []
const flags: string[] = []

for (const arg of process.argv.slice(2)) {
  if (arg.startsWith("-")) {
    flags.push(arg)
  } else {
    params.push(arg)
  }
}

const [inputPath, outputPath] = params

const processedStarted = () => {
  startTime = new Date()
}

const processFinished = () => {
  endTime = new Date()
  const milliseconds = endTime.getTime() - startTime.getTime()
  const seconds = milliseconds / 1000

  const timePrint: string = (seconds < 1) ? `[${milliseconds.toFixed(2)}ms]` : `[${seconds.toFixed(2)}s]`
  Console.status('Project converted in', timePrint)
}

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
  try {
    const files = fs.readdirSync(dirPath)

    for (const file of files) {
      const fullPath = path.join(dirPath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
      } else {
        arrayOfFiles.push(fullPath)
      }
    }
  } catch (error) {
    console.error(error)
  }

  return arrayOfFiles
}

async function runConversion (inputPath: string, outputPath: string) {
  try {
    processedStarted()
    Console.status('Conversion Started', '')

    const allFiles = getAllFiles(inputPath).filter((file: string) => !file.includes('node_modules'))

    const tsFiles = allFiles.filter((file: string) => file.endsWith('.ts') || file.endsWith('.tsx'))
    const otherFiles = allFiles.filter((file: string) => !file.endsWith('.ts') && !file.endsWith('.tsx'))

    let filesConvertedCount = 0

    const progressBar = new cliProgress.SingleBar({
      format: ' {bar} | {percentage}% | {value}/{total} Files | ETA: {eta}s'
    }, cliProgress.Presets.shades_classic)
    progressBar.start(allFiles.length, 0)

    await Promise.all(otherFiles.map(async (file: string) => {
      const relativePath = path.relative(inputPath, file)
      const destinationPath = path.join(outputPath, relativePath)
      await fs.copy(file, destinationPath)
      progressBar.increment()
    }))

    const numCPUs = os.cpus().length > 1 ? os.cpus().length - 1 : 1
    const workerPromises: Promise<void>[] = []

    const workerPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'worker.js')

    const taskQueue = [...tsFiles]

    for (let i = 0; i < numCPUs; i++) {
      workerPromises.push(new Promise((resolve) => {
        const worker = new Worker(workerPath)

        const nextTask = () => {
          if (taskQueue.length > 0) {
            const filePath = taskQueue.shift()!
            worker.postMessage({ filePath, inputPath, outputPath })
          } else {
            worker.terminate()
            resolve()
          }
        }

        worker.on('message', (result) => {
          if (result.status === 'success') {
            filesConvertedCount++
          } else {
            filesThatFailedConversion.push(result.path)
          }
          progressBar.increment()
          nextTask()
        })

        worker.on('error', () => {
          progressBar.increment()
          nextTask()
        })

        nextTask()
      }))
    }

    await Promise.all(workerPromises)

    progressBar.stop()

    console.log(
      `\n${chalk.cyan('Converted')} ${chalk.bold.whiteBright(filesConvertedCount)} ${chalk.cyan('Typescript files out of')} ${chalk.bold.whiteBright(tsFiles.length)}`
    )

    Console.success('Project converted successfully')

    if (!!filesThatFailedConversion.length) {
      Console.error('Files which were not converted successfully: ')
      filesThatFailedConversion.map((path: string) => {
        Console.warning(path)
      })
    }
    processFinished()
  } catch (error) {
    if (error instanceof Error) {
      Console.error(error.message)
    }
  }
}


if (!!!params.length) {
  if (!!!flags.length) {
    showHelp()
    process.exit(1)
  }
  if (flags.some((flag: string) => versionFlagsList.includes(flag))) {
    Console.info('VERSION:', packageJson.version + ' ')
    process.exit(0)
  }
  if (flags.some((flag: string) => helpFlagsList.includes(flag))) {
    showHelp()
    process.exit((params.length !== 2) ? 1 : 0)
  }
}
else if (params.length !== 2) {
  Console.error('Please provide only 2 arguments')
  showHelp()
  process.exit(1)
}
else {
  runConversion(inputPath, outputPath)
}