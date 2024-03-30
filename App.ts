import fs from 'fs-extra'
import { execSync } from 'child_process'
import { transformSync } from '@babel/core'
import * as path from 'path'
// process.argv[2]
const directoryPath = process.argv[2]

async function processFiles (directory: string) {
  try {
    const files = await fs.readdir(directory)

    for (const file of files) {
      const filePath = path.join(directory, file)

      if (fs.statSync(filePath).isDirectory()) {
        await processFiles(filePath)
      } else {
        if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' })
          const typesRemovedContent = await transformSync(fileContent, {
            compact: false,
            presets: ['@babel/preset-typescript'],
            filename: filePath
          })
          // const typesRemovedContent = await removeTypes(fileContent, false)
          console.log('filepath', filePath)
          await fs.writeFile(filePath, typesRemovedContent?.code ?? 'ERROR: CONVERTING FILE', { encoding: 'utf-8', })
          // console.log(`Content of ${file}:`)
          // console.log(fileContent)
        }
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
    fs.copySync(`${directoryPath}/TS`, `${directoryPath}/JS`)

    await processFiles(directoryPath)

    execSync(`find '${directoryPath}/JS' -type f -name "*.tsx" -exec sh -c \'mv "$1" "\${1%.tsx}.jsx"\' _ {} \\;`)
    execSync(`find '${directoryPath}/JS' -type f -name "*.ts" -exec sh -c \'mv "$1" "\${1%.ts}.js"\' _ {} \\;`)

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

