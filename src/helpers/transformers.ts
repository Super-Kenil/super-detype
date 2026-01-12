import * as tasks from './transformer-tasks.js'

const createTransformer = (taskName: keyof typeof tasks) => {
  return async (content: string, fileName: string): Promise<string> => {
    if (!fileName.endsWith('.ts') && !fileName.endsWith('.tsx')) {
      return content
    }

    try {
      const fn = tasks[taskName]
      const result = await fn(content, fileName)
      return result as string
    } catch (e) {
      // Just in case if babel ts parser fails converting because of invalid syntax (I've seen it happen)
      console.warn(`Transformation '${taskName}' failed for ${fileName}, using original content. Error: ${(e as Error).message}`)
      return content
    }
  }
}

export const getBabelTransformer = () => createTransformer('babelTransform')
export const getImportExtensionRemover = () => createTransformer('removeImportExtensions')
