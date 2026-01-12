import { parentPort } from 'worker_threads'
import * as tasks from './helpers/worker-tasks.js'

export type TaskName = keyof typeof tasks

parentPort?.on('message', async (message) => {
  const { id, content, filePath, taskName } = message
  // console.info(`Worker ${id} received task ${taskName} for ${filePath}`)

  try {
    const fn = tasks[taskName as TaskName]
    if (!fn) {
      throw new Error(`Unknown task: ${taskName}`)
    }

    // this should support both sync and async transformers, fingers crossed
    const result = await fn(content, filePath)

    parentPort?.postMessage({ id, status: 'success', result })
  } catch (error) {
    parentPort?.postMessage({
      id,
      status: 'error',
      error: (error instanceof Error) ? error.message : 'Unknown error',
      result: content
    })
  }
})