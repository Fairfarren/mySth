const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    let pathName = url.parse(req.url).pathname;
    pathName = decodeURI(pathName);
    console.log(`${new Date()}:  
                    ${decodeURI(pathName)}`);

    fs.readFile( pathName.substring(1), (err, data) => {
        if(err){
            res.writeHead(404, {
                'Content-Type': 'text/html'
            })
        }else{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
        }
        res.end();
    })
})

server.listen(1234, `127.0.0.1`, () => {
    console.log(`http://localhost:1234`);
})