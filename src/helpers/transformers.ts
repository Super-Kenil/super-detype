import type { WorkerPool } from './worker-pool'
import type { TaskName } from '../worker'

const createWorkerTransformer = (pool: WorkerPool, taskName: TaskName) => {
  return async (content: string, fileName: string): Promise<string> => {
    try {
      const result = await pool.exec({ content, filePath: fileName, taskName })
      return result as string
    } catch (e) {
      // incase if babel ts parser fails converting because of invalid syntax, I've seen it happen
      console.warn(`Worker transformation '${taskName}' failed for ${fileName}, using original content. Error: ${(e as Error).message}`)
      return content
    }
  }
}

export const getBabelTransformer = (pool: WorkerPool) => createWorkerTransformer(pool, 'babelTransform')
export const getImportExtensionRemover = (pool: WorkerPool) => createWorkerTransformer(pool, 'removeImportExtensions')
