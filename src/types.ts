export type WorkerData = {
  filePath: string
  fileContent: string
  outputPath: string
}

export type WorkerResult = {
  success: boolean
  filePath: string
  error?: string
}