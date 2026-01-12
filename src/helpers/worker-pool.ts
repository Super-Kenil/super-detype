import { Worker } from 'worker_threads'
import os from 'os'

type TaskCallback = (error: Error | null, result?: any) => void

type Task = {
  data: any
  callback: TaskCallback
}

export class WorkerPool {
  private workers: Worker[] = []
  private idleWorkers: Worker[] = []
  private taskQueue: Task[] = []
  private workerPath: string
  private taskMap: Map<number, TaskCallback> = new Map()
  private taskIdCounter = 0

  constructor(workerPath: string, size?: number) {
    // console.info(`WorkerPool initializing with path: ${workerPath}`)
    this.workerPath = workerPath
    const numCPUs = os.cpus().length
    const poolSize = size || (numCPUs > 1 ? numCPUs - 1 : 1)

    // add workers to the available pool
    for (let i = 0; i < poolSize; i++) {
      this.addWorker()
    }
  }

  private addWorker () {
    const worker = new Worker(this.workerPath)

    worker.on('message', (message) => {
      const { id, status, result, error } = message
      const callback = this.taskMap.get(id)

      // handle callback based on worker message
      if (callback) {
        this.taskMap.delete(id)
        if (status === 'error') {
          // If we want to support "fallback to original on error", we can pass result if available
          if (result !== undefined) {
            callback(null, result)
          } else {
            callback(new Error(error))
          }
        } else {
          callback(null, result)
        }
      }

      // clean up used workers to mark them as free
      this.idleWorkers.push(worker)
      this.processNextTask()
    })

    worker.on('error', (err) => {
      console.error('Worker error:', err)
    })

    this.workers.push(worker)
    this.idleWorkers.push(worker)
  }

  private processNextTask () {
    if (this.taskQueue.length > 0 && this.idleWorkers.length > 0) {
      const task = this.taskQueue.shift()!
      const worker = this.idleWorkers.pop()!
      const id = this.taskIdCounter++

      this.taskMap.set(id, task.callback)
      worker.postMessage({ id, ...task.data })
    }
  }

  // performs and assigns tasks
  public exec (data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const task: Task = {
        data,
        callback: (err, result) => {
          if (err) reject(err)
          else resolve(result)
        }
      }
      this.taskQueue.push(task)
      this.processNextTask()
    })
  }

  public async close () {
    await Promise.all(this.workers.map(w => w.terminate()))
  }
}
