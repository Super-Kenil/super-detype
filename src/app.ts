#!/usr/bin/env node

import Chalk from 'chalk'
import path from 'path'
import { pathToFileURL } from 'url'
import packageJson from "../package.json" with { type: "json" }
import { fileTransformer, type FileTransformerOptions, type TransformerFunction } from './helpers/file-transformer.js'
import { getBabelTransformer, getImportExtensionRemover } from './helpers/transformers.js'

const chalk = new Chalk.Instance({ level: 1 })

type ChalkLogType = {
  error: (...args: string[]) => void,
  warning: (...args: string[]) => void,
  success: (...args: string[]) => void,
  status: (...args: string[]) => void,
  info: (...args: string[]) => void,
}

export type RunConversionOptions = (
  options: FileTransformerOptions,
  transformers?: TransformerFunction[]
) => Promise<void>

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
    ${chalk.bold('After installing as global dependency:')} ${chalk.italic('super-detype <INPUT> <OUTPUT> [OPTIONS]')}

    ${chalk.bold('Without installing:')} ${chalk.italic("npx super-detype <INPUT> <OUTPUT> [OPTIONS]")}

  ${chalk.magenta('FLAGS:')}
    ${chalk.bold(`-f, --filter <GLOB>`)}  Filter files using glob pattern (e.g. "**/*.ts")

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

let startTime: Date
let endTime: Date

const processedStarted = () => {
  startTime = new Date()
}

const processFinished = () => {
  endTime = new Date()
  const milliseconds = endTime.getTime() - startTime.getTime()
  const seconds = milliseconds / 1000

  const timePrint: string = (seconds < 1) ? `[${milliseconds.toFixed(2)}ms]` : `[${seconds.toFixed(2)}s]`
  Console.status('Processed in:', timePrint)
}

export const runConversion: RunConversionOptions = async (
  passedOptions,
  passedTransformers
) => {
  const {
    inputPath,
    outputPath,
    pattern: filterPattern,
    pathTransform = (relativePath, isDirectory) => {
      if (isDirectory) return relativePath
      const ext = path.extname(relativePath)
      if (ext === '.tsx') {
        return relativePath.substring(0, relativePath.lastIndexOf('.tsx')) + '.jsx'
      } else if (ext === '.ts' && !relativePath.endsWith('.d.ts')) { // so that it doesn't rename .d.ts import statements even though nothing is imported from them actually
        return relativePath.substring(0, relativePath.lastIndexOf('.ts')) + '.js'
      }
      return relativePath
    },
    filter = (name, isDirectory) => {
      // Filter out node_modules
      if (name === 'node_modules') return false
      // Filter out .d.ts files
      if (!isDirectory && name.endsWith('.d.ts')) return false
      return true
    }
  } = passedOptions

  const transformers = passedTransformers ?? [
    getImportExtensionRemover(),
    getBabelTransformer()
  ]

  try {
    processedStarted()
    Console.status('Conversion Started', '')

    const options: FileTransformerOptions = {
      inputPath: path.resolve(inputPath),
      outputPath: outputPath ? path.resolve(outputPath) : undefined,
      pattern: filterPattern,
      pathTransform,
      filter
    }

    await fileTransformer(options, transformers)

    processFinished()
    Console.success('Project converted successfully')

  } catch (error) {
    if (error instanceof Error) {
      Console.error(error.message)
    }
  }
}

// Argument parsing logic..
const isMain = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url

if (isMain) {
  const params: string[] = []
  const flags: string[] = []
  let filterPattern: string | undefined

  const args = process.argv.slice(2)
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg.startsWith("-")) {
      if (arg === '-f' || arg === '--filter') {
        filterPattern = args[i + 1]
        i++
      } else {
        flags.push(arg)
      }
    } else {
      params.push(arg)
    }
  }

  if (params.length === 0) {
    if (flags.length === 0) {
      showHelp()
      process.exit(1)
    }
    if (flags.some((flag: string) => versionFlagsList.includes(flag))) {
      Console.info('VERSION:', packageJson.version + ' ')
      process.exit(0)
    }
    if (flags.some((flag: string) => helpFlagsList.includes(flag))) {
      showHelp()
      // decides to show error or not
      process.exit((params.length !== 2) ? 1 : 0)
    }
  }
  else if (params.length !== 2) {
    Console.error('Please provide input and output paths')
    showHelp()
    process.exit(1)
  }
  else {
    const [input, output] = params
    runConversion({
      inputPath: input,
      outputPath: output,
      pattern: filterPattern
    })
  }
}