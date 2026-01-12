import fs from 'fs-extra'
import fg from 'fast-glob'
import path from 'path'

const binaryExtensions = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.pdf', '.zip', '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.webm', '.ogg', '.mp3', '.wav', '.flac', '.aac', '.otf'
])

const isBinaryFile = (fileName: string) => {
  const ext = path.extname(fileName).toLowerCase()
  return binaryExtensions.has(ext)
}

export type TransformerFunction = (content: string, fileName: string) => string | Promise<string>

export type FileTransformerOptions = {
  // path to file or directory
  inputPath: string
  // path to file or directory
  outputPath?: string
  // glob pattern to match files
  pattern?: string | string[]
  // transform / update destination path or filename
  pathTransform?: (relativePath: string, isDirectory: boolean) => string
  // a function that returns false to skip copying
  filter?: (name: string, isDirectory: boolean) => boolean
}

export const fileTransformer = async (
  options: FileTransformerOptions,
  transformers: TransformerFunction[],
): Promise<void> => {
  const { inputPath, outputPath, pattern, pathTransform, filter } = options

  const resolveDestPath = (relativePath: string, isDir: boolean) => {
    if (!outputPath) return path.join(inputPath, relativePath)

    const transformedRelative = pathTransform ? pathTransform(relativePath, isDir) : relativePath
    return path.join(outputPath, transformedRelative)
  }

  const transformFile = async (src: string, dest: string) => {
    const fileName = path.basename(src)
    const outDir = path.dirname(dest)
    try {
      if (!await fs.pathExists(outDir)) await fs.mkdirs(outDir)

      if (isBinaryFile(fileName) || transformers.length === 0) {
        await fs.copy(src, dest)
        return
      }

      let content = await fs.readFile(src, 'utf-8')
      for (const fn of transformers) {
        content = await fn(content, fileName)
      }
      await fs.writeFile(dest, content, 'utf-8')
    } catch (e) {
      console.error(`Failed to transform ${src}:`, e)
      // just blindly copy if read error
      if (!await fs.pathExists(dest)) {
        await fs.copy(src, dest).catch(() => { })
      }
    }
  }

  const transformRecursive = async (currentRelativePath: string) => {
    const srcDir = path.join(inputPath, currentRelativePath)
    const files = await fs.readdir(srcDir)

    await Promise.all(files.map(async (file) => {
      const childRelativePath = path.join(currentRelativePath, file)
      const srcPath = path.join(inputPath, childRelativePath)
      const stats = await fs.stat(srcPath)
      const isDir = stats.isDirectory()

      if (filter && !filter(file, isDir)) return

      if (isDir) {
        // Recursively transform because you know, nested directories
        await transformRecursive(childRelativePath)
      } else {
        const destPath = resolveDestPath(childRelativePath, false)
        await transformFile(srcPath, destPath)
      }
    }))
  }

  const stats = await fs.stat(inputPath)
  if (stats.isDirectory()) {
    if (pattern) {
      // pattern matching at the input dir instead of cwd
      const files = await fg(pattern, { cwd: inputPath })

      await Promise.all(files.map(async (file) => {
        // file is relative to inputPath for ex. src/app.ts
        const fileName = path.basename(file)
        if (filter && !filter(fileName, false)) return

        const destPath = resolveDestPath(file, false)
        await transformFile(path.join(inputPath, file), destPath)
      }))

    } else {
      await transformRecursive('')
    }
  } else {
    const fileName = path.basename(inputPath)
    // output destination transformer to sometimes when you want to rename all page.tsx to index.tsx or even change casing of the files, why not?
    const transformedName = pathTransform ? pathTransform(fileName, false) : fileName
    let destPath: string
    if (outputPath) {
      const isDir = (await fs.pathExists(outputPath)) && (await fs.stat(outputPath)).isDirectory()
      destPath = isDir ? path.join(outputPath, transformedName) : outputPath
    } else {
      destPath = path.join(path.dirname(inputPath), transformedName)
    }

    await transformFile(inputPath, destPath)
  }
}
