import * as fs from 'node:fs/promises'

// function createFile(pathname){


//     // //sync (not recommended in production apps)
//     // fs.writeFileSync(pathname, 'Hello Nodejs!\n')
//     // //overwites
//     // fs.appendFileSync(pathname, 'Hello JavaScript!')


//     //Async
//     //Error First Callbacks
//     // fs.writeFile(pathname, 'Hello Nodejs!\n', (err)=>{
//     //     if(err){
//     //         console.log('something went wrong while creating file....')
//     //         return
//     //     }

//     //     fs.appendFile(pathname, 'Hello js!\n', (err)=>{
//     //         if(err){
//     //             console.log('something went wrong while creating file....')
//     //             return
//     //         }
    
//     //         console.log('File appended asynchronously')
            
//     //     })

//     //     console.log('File created asynchronously')
        
//     // })


    
//     console.log('File operation done');
    
// }


async function createFile(pathname){
    try{
        await fs.writeFile(pathname, 'Hello NodeJS!\n')
        await fs.appendFile(pathname, 'Hello JavaScript!')
    }catch(error){
        console.log('error ', error);
        
    }

    console.log('File Written');
}

createFile('./hello.txt')

