import { parentPort } from 'worker_threads'
import { transformSync } from '@babel/core'
import * as fs from 'fs-extra'
import { WorkerData, WorkerResult } from './types'
// @ts-expect-error: No types required
import babelTS from "@babel/preset-typescript"

parentPort?.on('message', async (data: WorkerData) => {
  try {
    const typesRemovedContent = transformSync(data.fileContent, {
      compact: false,
      presets: [babelTS],
      filename: data.filePath,
      generatorOpts: { importAttributesKeyword: 'with' }
    })

    await fs.writeFile(
      data.outputPath, 
      typesRemovedContent?.code ?? data.fileContent,
      { encoding: 'utf-8' }
    )

    await fs.rm(data.filePath, { force: true })

    parentPort?.postMessage({
      success: true,
      filePath: data.filePath
    } as WorkerResult)
  } catch (error) {
    parentPort?.postMessage({
      success: false,
      filePath: data.filePath,
      error: error instanceof Error ? error.message : 'Unknown error'
    } as WorkerResult)
  }
})