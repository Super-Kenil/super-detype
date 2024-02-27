import fs from 'fs-extra'
import { program } from 'commander'
import { execSync } from 'child_process'
import { removeTypes } from 'remove-types'
import * as path from 'path'

const directoryPath = './dist/JS'

async function processFiles (directory: string) {
  try {
    const files = await fs.readdir(directory)

    for (const file of files) {
      const filePath = path.join(directory, file)

      if (fs.statSync(filePath).isDirectory()) {
        await processFiles(filePath)
      } else {
        if (file.endsWith('.js') || file.endsWith('.jsx')) {
          const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' })
          const typesRemovedContent = await removeTypes(fileContent, false)
          console.log('filepath', filePath)
          await fs.writeFile(filePath, typesRemovedContent, { encoding: 'utf-8', })
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
    fs.copySync('TS', 'dist/JS',)
    execSync('find ./dist/JS -type f -name "*.tsx" -exec sh -c \'mv "$1" "${1%.tsx}.jsx"\' _ {} \\;')
    execSync('find ./dist/JS -type f -name "*.ts" -exec sh -c \'mv "$1" "${1%.ts}.js"\' _ {} \\;')

    await processFiles(directoryPath)

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

