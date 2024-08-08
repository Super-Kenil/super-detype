#!/usr/bin/env node

import fs from 'fs-extra'
import { transformSync } from '@babel/core'
import * as path from 'node:path'
import chalkFile from 'chalk'

const chalk = new chalkFile.Instance({ level: 1 })

// @ts-expect-error: No types required
import babelTS from "@babel/preset-typescript"

const inputPath = process.argv[2]
const outputPath = process.argv[3]

process.title = 'super-detype'

const filesThatFailedConversion: string[] = []
let totalFilesCount = 0
let filesConvertedCount = 0
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
  console.log(chalk.magenta('Project converted in'), chalk.whiteBright(timePrint))
}

async function processFiles (directory: string) {
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

console.log(chalk.bold.bgMagenta('Conversion Started'));

// console.log('compiler started');
(async function copy () {
  try {
    processedStarted()
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

    console.log(chalk.bold.bgGreenBright('Project converted successfully'))

    if (!!filesThatFailedConversion.length) {
      console.log(chalk.bold.bgRedBright('Files which were not converted successfully:'))
      filesThatFailedConversion.map((path) => {
        console.log(chalk.yellow(path))
      })
    }
    processFinished()
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.bold.bgRed('Error:'), chalk.bgWhite(error.message))
    }
  }
})()

const saveFailedFile = (path: string): string => {
  filesThatFailedConversion.push(path)
  return `ERROR: CONVERTING ${path}`
}
