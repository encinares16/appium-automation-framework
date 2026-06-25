import fs from 'fs'

export function checkFolderExist(directory: string){
  let path = `./artifacts/screenshots/${directory}`

  if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { 
        recursive: true
      })
    // console.log(`${path} directory is ready.`)
  }
}