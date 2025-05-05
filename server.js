import {createServer} from 'node:http'
import fs from 'node:fs/promises'

const server = createServer(async (req, res)=>{
    //ROuting....
    // console.log('req', req);

    if(req.url === '/'){
        res.writeHead(200, {'content--type': 'text/html'})
        const data = await fs.readFile('./index.html')
        res.end(data)
    }else if(req.url === '/about'){
        res.end('<h1>This is your about page<h1>')
    }
    
    console.log('Request received');
    
})

server.listen(3000, ()=>{
    console.log('Server running on port 3000');
})