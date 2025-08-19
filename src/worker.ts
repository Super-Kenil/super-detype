import { parentPort } from 'node:worker_threads'
import fs from 'fs-extra'
import { transformSync } from '@babel/core'
// @ts-expect-error: No types required
import babelTS from "@babel/preset-typescript"
import * as path from 'node:path'

parentPort?.on('message', ({ filePath, inputPath, outputPath }: { filePath: string, inputPath: string, outputPath: string }) => {
  try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const typesRemovedContent = transformSync(fileContent, {
      compact: false,
      presets: [babelTS],
      filename: filePath,
      generatorOpts: { importAttributesKeyword: 'with' }
    })

    const relativePath = path.relative(inputPath, filePath);
    let destinationFilePath = path.join(outputPath, relativePath);

    if (filePath.endsWith('.tsx')) {
      destinationFilePath = destinationFilePath.substring(0, destinationFilePath.lastIndexOf('.tsx')) + '.jsx'
    } else {
      destinationFilePath = destinationFilePath.substring(0, destinationFilePath.lastIndexOf('.ts')) + '.js'
    }

    if (typesRemovedContent?.code) {
      fs.outputFileSync(destinationFilePath, typesRemovedContent.code, { encoding: 'utf-8' })
      parentPort?.postMessage({ status: 'success', path: filePath })
    } else {
      fs.copySync(filePath, destinationFilePath)
      parentPort?.postMessage({ status: 'fail', path: filePath })
    }
  } catch (error) {
    const relativePath = path.relative(inputPath, filePath);
    let destinationFilePath = path.join(outputPath, relativePath);
    if (filePath.endsWith('.tsx')) {
      destinationFilePath = destinationFilePath.substring(0, destinationFilePath.lastIndexOf('.tsx')) + '.jsx'
    } else if (filePath.endsWith('.ts')) {
      destinationFilePath = destinationFilePath.substring(0, destinationFilePath.lastIndexOf('.ts')) + '.js'
    }
    fs.copySync(filePath, destinationFilePath)
    parentPort?.postMessage({ status: 'fail', path: filePath, error: (error as Error).message })
  }
})