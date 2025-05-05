#!/usr/bin/env node

import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import chalk from "chalk";
import { createFolder, createFile, writeToFile, deleteFile, deleteFolder, listItems } from './fs_precise.js'; 

const rl = readline.createInterface({
    input : stdin,
    output: stdout,
})


async function menu(){
    console.clear()
    console.log(chalk.blue.bold(`\nFile System Manager 📁\n`));
    const options = [
        'Create Folder',
        'Create File',
        'Write To File',
        'Delete File',
        'Delete Folder',
        'List Items',
        'Exit',
    ]
    options.forEach((opt, i) => console.log(chalk.yellow(`${i+1}.`) + chalk.white(` ${opt}`)));
    

    const answer = await rl.question(chalk.cyan('\nSelect Option: '))

    switch(answer){
        case '1':
            const folderPath = await rl.question(chalk.white('Folder Path: '))
            await createFolder(folderPath)
            console.log(chalk.green('Folder created succcessfully ✅'));
            break

        case '2':
            const filePath = await rl.question(chalk.white('File Path: '))
            const initialContent = await rl.question(chalk.white('Initial Content: '))
            await createFile(filePath, initialContent)
            console.log(chalk.green('File created succcessfully ✅'));
            break

        case '3':
            const appendFilePath = await rl.question(chalk.white('File Path: '))
            const appendContent = await rl.question(chalk.white('Content: '))
            await writeToFile(appendFilePath, `\n${appendContent}`)
            console.log(chalk.green('File appended succcessfully ✅'));
            break

        case '4':
            const deleteFilePath = await rl.question(chalk.white('File Path: '))
            await deleteFile(deleteFilePath)
            console.log(chalk.green('File deleted succcessfully ✅'));
            break


        case '5':
            const deleteFolderPath = await rl.question(chalk.white('Folder Path: '))
            await deleteFolder(deleteFilePath)
            console.log(chalk.green('Folder deleted succcessfully ✅'));
            break

        case '6':
            const listPath = await rl.question(chalk.white('Folder Path (Enter for current): '))
            const items = await listItems(listPath || './')
            console.log(chalk.blue('\nContents: '));

            items.forEach(item =>{
                const icon = item.type === 'folder' ? '📁' : '📄';
                console.log(`${icon} ${chalk.yellow(item.name)} `);
                
            })
            break

        case '7':
            rl.close()
            console.log('You are out of application.');
            return
7
        default:
            console.log(chalk.red('Invalid Option ⚠️'));
            
            
    }

    await rl.question(chalk.gray('\nPress ENTER to continue....'))
    menu()
    // console.log(answer);
    
}

menu()