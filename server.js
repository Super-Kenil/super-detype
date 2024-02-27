import fs from 'fs-extra'
import { program } from 'commander'
import { execSync } from 'child_process';

(function copy () {

  try {
    fs.copySync('TS', 'dist/JS',)
    // execSync('find ./dist/JS -type f -name "*.tsx" -exec sh -c \'mv "$1" "${1%.tsx}.jsx"\' _ {} \\;')
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

