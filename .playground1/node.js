#!/usr/bin/env node
"use client";
import { copySync, readdir, readFileSync, rm, statSync, writeFile } from 'fs-extra'
import getBabelOptions from "recast/parsers/_babel_options";
import { transformFromAstSync } from '@babel/core';
import { join } from 'node:path'
import { Instance } from 'chalk'
import { parse, print } from "recast"
// @ts-expect-error: No types required
import transformTypescript from "@babel/plugin-transform-typescript";
import { parser } from "recast/parsers/babel"
import packageJson from "../package.json"

const chalk = new Instance({ level: 1 })

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

const Console = {
  error: (...args) => {
    console.error(chalk.bold.bgRed('Error: '), chalk.bgWhite(args[0]), restArgs(args, 1))
  },
  success: (...args) => {
    console.log(
      chalk.bold.bgGreenBright('Success: '),
      chalk.bgWhite(args[0]),
      restArgs(args, 1)
    )
  },
  info: (...args) => {
    console.info(chalk.bold.bgCyan(args[0]), chalk.bgWhite(args[1]), restArgs(args, 2))
  },
  warning: (...args) => {
    console.warn(
      chalk.bold.bgYellowBright(args[0]),
      chalk.bgWhite(args[1]),
      restArgs(args, 2)
    )
  },
  status: (...args) => {
    console.log(chalk.bold.bgMagenta(args[0]), chalk.bgWhite(args[1]), restArgs(args, 2))
  },
}

function restArgs(args, startFrom) {
  return args.slice(startFrom).join(', ');
}

function showHelp () {
  console.log(HELP_USAGE)
}

const filesThatFailedConversion = []
let totalFilesCount = 0
let filesConvertedCount = 0
let startTime
let endTime

const params = []
const flags = []

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

  const timePrint = (seconds < 1) ? `[${milliseconds.toFixed(2)}ms]` : `[${seconds.toFixed(2)}s]`
  Console.status('Project converted in', timePrint)
}

const saveFailedFile = (path, content) => {
  filesThatFailedConversion.push(path)
  return content
}

const transformerOptions = {
  cloneInputAst: false,
  code: false,
  ast: true,
  plugins: [transformTypescript],
  configFile: false
}

const processFiles = async (directory) => {
  try {
    const files = await readdir(directory)

    for (const file of files) {
      const filePath = join(directory, file)

      if (statSync(filePath).isDirectory()) {
        await processFiles(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        totalFilesCount++
        const fileContent = readFileSync(filePath, { encoding: 'utf-8' })
        const ast = parse(fileContent, {
          parser: {
            parse: (source, options) => {
              const babelOptions = getBabelOptions(options)
              babelOptions.plugins.push('typescript', 'jsx')
              return parser.parse(source, babelOptions);
            }
          }
        })
        const transformedAst = transformFromAstSync(ast, fileContent, transformerOptions)?.ast
        let typesRemovedContent
        if (!transformedAst) saveFailedFile(filePath, fileContent)
        else typesRemovedContent = print(transformedAst).code


        // {
        //   compact: false,
        //   presets: [presetTS],
        //   filename: filePath
        // }
        // )
        // console.log('filepath', filePath)
        let replacedPath = filePath
        if (file.endsWith('.tsx')) {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.tsx')) + '.jsx'
        } else {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.ts')) + '.js'
        }
        await writeFile(replacedPath, typesRemovedContent ?? '', { encoding: 'utf-8', })
        await rm(filePath, { force: true })
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

const directoriesToIgnore = ['node_modules', '.next', '.git', '.vscode', '.idea', '.nuxt', 'dist', 'build', 'out']

async function copyDir () {
  try {
    processedStarted()
    Console.status('Conversion Started', '')
    copySync(inputPath, outputPath, {
      filter: (src) => {
        return !directoriesToIgnore.some((dir) => src.includes(dir));
      }
    })


    processFiles(outputPath).then(()=>{
      console.log(
        chalk.cyan('Converted'),
        chalk.bold.whiteBright(filesConvertedCount),
        chalk.cyan('Typescript files out of'),
        chalk.bold.whiteBright(totalFilesCount)
      )
  
      Console.success('Project converted successfully')
    }).catch(()=>{

    })

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

if (!!!params.length) {
  if (!!!flags.length) {
    showHelp()
    process.exit(1)
  }
  if (flags.some((flag) => versionFlagsList.includes(flag))) {
    Console.info('VERSION:', packageJson.version + ' ')
    process.exit(0)
  }
  if (flags.some((flag) => helpFlagsList.includes(flag))) {
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
  copyDir()
}
