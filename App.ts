import fs from 'fs-extra'
// import { execSync } from 'child_process'
import { transformSync } from '@babel/core'
import * as path from 'path'
// process.argv[2]
const inputPath = process.argv[2]
const outputPath = process.argv[3]

async function processFiles (directory: string) {
  try {
    const files = await fs.readdir(directory)

    for (const file of files) {
      const filePath = path.join(directory, file)

      if (fs.statSync(filePath).isDirectory()) {
        await processFiles(filePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
        const typesRemovedContent = transformSync(fileContent, {
          compact: false,
          presets: ['@babel/preset-typescript'],
          filename: filePath
        })
        // C:\Coding projects\Super-Kenil\ts-compiler\App.ts
        // const typesRemovedContent = await removeTypes(fileContent, false)
        // console.log('file', file)
        console.log('filepath', filePath)
        let replacedPath = filePath
        if (file.endsWith('.tsx')) {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.tsx')) + '.jsx'
        } else {
          replacedPath = filePath.substring(0, filePath.lastIndexOf('.ts')) + '.js'
        }
        await fs.writeFile(replacedPath, typesRemovedContent?.code ?? 'ERROR: CONVERTING FILE', { encoding: 'utf-8', })
        await fs.rm(filePath, { force: true })
        // console.log(`Content of ${file}:`)
        // console.log(fileContent)

      }
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
  }
}

(async function copy () {
  try {
    // TODO Make the destination directory dynamic
    fs.copySync(inputPath, outputPath, {
      filter: (src) => {
        return !src.includes('node_modules')
      }
    })

    await processFiles(outputPath)

    // renames .ts and .tsx files to .js and .jsx after removing types
    // execSync(`find '${directoryPath}/JS' -type f -name "*.tsx" -exec sh -c \'mv "$1" "\${1%.tsx}.jsx"\' _ {} \\;`)
    // execSync(`find '${directoryPath}/JS' -type f -name "*.ts" -exec sh -c \'mv "$1" "\${1%.ts}.js"\' _ {} \\;`)

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
  }

})()


// err => {
//   if (err) return console.error(err)
//   console.log('success!')
// }

