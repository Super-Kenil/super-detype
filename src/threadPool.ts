import { Worker } from 'worker_threads'
import * as path from 'path'
import * as os from 'os'
import { WorkerData, WorkerResult } from './types'

export class ThreadPool {
  private workers: Worker[] = []
  private numThreads: number

  constructor() {
    this.numThreads = Math.max(os.cpus().length - 1, 1)
  }

  async processFile(data: WorkerData): Promise<WorkerResult> {
    return new Promise((resolve) => {
      const worker = new Worker(path.join(__dirname, 'worker.js'))
      this.workers.push(worker)

      worker.on('message', (result: WorkerResult) => {
        worker.terminate()
        resolve(result)
      })

      worker.postMessage(data)
    })
  }

  async processBatch(dataList: WorkerData[]): Promise<WorkerResult[]> {
    const chunks = this.splitIntoBatches(dataList, this.numThreads)
    const results = await Promise.all(
      chunks.map(chunk => 
        Promise.all(chunk.map(data => this.processFile(data)))
      )
    )
    return results.flat()
  }

  private splitIntoBatches<T>(items: T[], numBatches: number): T[][] {
    const batchSize = Math.ceil(items.length / numBatches)
    return Array.from({ length: numBatches }, (_, i) =>
      items.slice(i * batchSize, (i + 1) * batchSize)
    ).filter(batch => batch.length > 0)
  }

  cleanup() {
    this.workers.forEach(worker => worker.terminate())
  }
}