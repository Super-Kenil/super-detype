import { transformSync } from '@babel/core'
// @ts-expect-error: No types required
import babelTS from "@babel/preset-typescript"

// the brains which does ts -> js conversion thing
export const babelTransform = (content: string, filePath: string): string => {
  const output = transformSync(content, {
    compact: false,
    presets: [babelTS],
    filename: filePath,
    generatorOpts: { importAttributesKeyword: 'with' }
  })

  return output?.code || content
}

// removes .ts or .tsx extensions from import statements
export const removeImportExtensions = (content: string, _filePath: string): string => {
  return content
    .split('\n')
    .filter((line) => {
      // select and remove imports coming from .d.ts files
      if (/^\s*import/.test(line) && /\.d\.ts['"]\s*;?\r?$/.test(line)) {
        return false
      }
      return true
    })
    .map((line) => {
      if (/^\s*import/.test(line)) {
        // removes .ts or .tsx extensions
        return line.replace(/\.tsx?(['"]\s*;?\r?$)/, '$1')
      }
      return line
    })
    .join('\n')
}

export const removeDTDepsFromPackageJson = (content: string, _filePath: string): string => {
  if (_filePath.endsWith('package.json')) {
    return content.replace(/"@types\/.*/g, '')
    .replace(/"typescript".*/g, '')
  }
  return content
}