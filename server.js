import {createServer} from 'node:http'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

const server = createServer(async (req, res)=>{
    //ROuting....
    // console.log('req', req);

    if(req.url === '/'){
        res.writeHead(200, {'content--type': 'text/html'})
        // const data = await fs.readFile('./index.html')

        const dataStraem = fs.createReadStream('./index.html')

        dataStraem.pipe(res)

        // dataStraem.on('data', (chunk)=>{
        //     res.write(chunk)
        // })

        // dataStraem.on('end', ()=>{
        //     res.end()
        // })

        
    }else if(req.url === '/about'){
        res.writeHead(200, {'content--type': 'text/html'})
        res.end('<h1>This is your about page<h1>')
    }else if(req.url === '/expenses'){
        //Api
        //create an expense 
        //POST

        if(req.method === 'POST'){
            //read data from rrequest
            let buff = ''
            req.on('data', (chunk)=>{
                console.log('chunk ', chunk);
                buff = buff + chunk.toString()
            }) 


            req.on('end', async()=>{
                const data = await fsPromises.readFile('./db.json')
                const dbData = JSON.parse(data)
                dbData.push(JSON.parse(buff))
                await fsPromises.writeFile('./db.json', JSON.stringify(dbData, null, 2))
                res.end('OK')
            })
            //store it in json database

        }else if(req.method === 'GET'){
            //read data from json db 
            //return the data to client
        }
    }
    
    console.log('Request received');
    
})

server.listen(3000, ()=>{
    console.log('Server running on port 3000');
})