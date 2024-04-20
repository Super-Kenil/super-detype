#!/usr/bin/env node

import fs from 'fs-extra'
import { transformSync } from '@babel/core'
import * as path from 'path'
const inputPath = process.argv[2]
const outputPath = process.argv[3]

async function processFiles(directory) {
  try {
    const files = await fs.readdir(directory)

    for (const file of files) {
      const filePath = path.join(directory, file)

      if (fs.statSync(filePath).isDirectory()) {
        await processFiles(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
        const typesRemovedContent = transformSync(fileContent, {
          compact: false,
          presets: ['@babel/preset-typescript'],
          filename: filePath
        })
        console.log('filepath', filePath)
        let replacedPath = filePath
        if (file.endsWith('.tsx')) {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.tsx')) + '.jsx'
        } else {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.ts')) + '.js'
        }
        await fs.writeFile(replacedPath, typesRemovedContent?.code ?? 'ERROR: CONVERTING FILE', { encoding: 'utf-8', })
        await fs.rm(filePath, { force: true })

      }
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
  }
}
console.log('compiler started');
(async function copy() {
  try {
    fs.copySync(inputPath, outputPath, {
      filter: (src) => {
        return !src.includes('node_modules')
      }
    })

    await processFiles(outputPath)

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
  }

})()
