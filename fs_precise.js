import * as fs from 'node:fs/promises'
import path from 'node:path'

export async function listItems(listPath = './') {
    const items = await fs.readdir(listPath, {withFileTypes: true})
    return items.map(item => {
        return{
            name: item.name,
            type: item.isDirectory() ? 'folder' : 'file',
            path: path.join(import.meta.dirname, item.name),
        }
    })
    // console.log(items);
    
}

export async function deleteFolder(folderpath){
    await fs.rm(folderpath, {recursive:true})
}

export async function deleteFile(filepath){
    await fs.unlink(filepath)
}

async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'utf-8')
    console.log('data', data);
}

export async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive:true})
}

export async function writeToFile(pathname, content = ''){
    await fs.appendFile(pathname, content)
}

export async function createFile(pathname, content = ''){
    await fs.writeFile(pathname, content)
}

 
async function getFileInfo(filepath){
    const stats = await fs.stat(filepath)

    return{
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString()
    }
    
}

// getFileInfo('./hello.txt').then((data)=>{
//     console.log('data', data);
// })




// createFolder('./contents/images/logos')
// createFile('./hello.txt')
// writeToFile('./hello.txt', '\nHello World..........')
// readFile('./hello.txt')
// deleteFile('./hello.txt')
// deleteFolder('./contents')
// getFileInfo('./hello.txt')