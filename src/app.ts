#!/usr/bin/env node

import fs from 'fs-extra'
import { transformSync } from '@babel/core'
import * as path from 'node:path'
import chalkFile from 'chalk'
// @ts-expect-error: No types required
import babelTS from "@babel/preset-typescript"
import packageJson from "../package.json"

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

// TODO, use chalk for below usage info
const HELP_USAGE = `
HELP: 
  
  USAGE: 
    After installing as global dependency: super-detype <INPUT> <OUTPUT>

    Without installing: npx super-detype <INPUT> <OUTPUT>

  KEYS: 
    INPUT:   Typescript project directory's path which you want converted to Javascript (required)
    OUTPUT:  Path where you would like store your converted project, directory will be created if doesn't exists (required)

  FLAGS:
    super-detype [${versionFlagsList.join(' | ')}]
      (Shows current installed version of super-detype)

    super-detype [${helpFlagsList.join(' | ')}]
      (Shows Usage information on super-detype)
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

(async function CLIProcess () {

  const filesThatFailedConversion: string[] = []
  let totalFilesCount = 0
  let filesConvertedCount = 0
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

  if (!!params.length) {
    if (!!flags.length) {
      showHelp()
      return false
    }
    if (flags.some((flag) => versionFlagsList.includes(flag))) {
      Console.info('VERSION: ', packageJson.version)
      return true
    }
    if (flags.some((flag) => helpFlagsList.includes(flag))) {
      showHelp()
      return params.length !== 2
    }
  } else if (params.length !== 2) {
    Console.error('Please provide only 2 arguments')
    showHelp()
    return false
  }
  else {
    copyDir()
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

  const saveFailedFile = (path: string): string => {
    filesThatFailedConversion.push(path)
    return `ERROR: CONVERTING ${path}`
  }

  const processFiles = async (directory: string) => {
    try {
      const files = await fs.readdir(directory)

      // console.log(chalk.bold.bgCyan('Total Files:', chalk.bgWhite(totalFilesCount.toString())))
      for (const file of files) {
        const filePath = path.join(directory, file)

        if (fs.statSync(filePath).isDirectory()) {
          await processFiles(filePath)
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          totalFilesCount++
          const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
          const typesRemovedContent = transformSync(fileContent, {
            compact: false,
            presets: [babelTS],
            filename: filePath
          })
          // console.log('filepath', filePath)
          let replacedPath = filePath
          if (file.endsWith('.tsx')) {
            replacedPath = filePath.substring(0, filePath.lastIndexOf('.tsx')) + '.jsx'
          } else {
            replacedPath = filePath.substring(0, filePath.lastIndexOf('.ts')) + '.js'
          }
          await fs.writeFile(replacedPath, typesRemovedContent?.code ?? saveFailedFile(filePath), { encoding: 'utf-8', })
          await fs.rm(filePath, { force: true })
          // console.log(chalk.bold.bgBlue('Files converted:'), chalk.bgWhite(`${filesConverted + 1}`))
          filesConvertedCount++
        }
      }

    }
    catch (error) {
      if (error instanceof Error) {
        console.error(chalk.bold.bgRed('Error:'), chalk.bgWhite(error.message))
      }
    }
  }

  async function copyDir () {
    try {
      processedStarted()
      Console.status('Conversion Started')
      fs.copySync(inputPath, outputPath, {
        filter: (src) => {
          return !src.includes('node_modules')
        }
      })

      await processFiles(outputPath)

      console.log(
        chalk.cyan('Converted'),
        chalk.bold.whiteBright(filesConvertedCount),
        chalk.cyan('typescript files out of'),
        chalk.bold.whiteBright(totalFilesCount)
      )

      Console.success('Project converted successfully')

      if (!!filesThatFailedConversion.length) {
        Console.error('Files which were not converted successfully: ')
        filesThatFailedConversion.map((path) => {
          Console.warning(path)
        })
      }
      processFinished()
      return true
    } catch (error) {
      if (error instanceof Error) {
        Console.error(error.message)
      }
    }
  }

})()
  .then((success) => process.exit(success ? 0 : 1))
  .catch((error) => {
    Console.error(error)
    process.exit(1)
  })
