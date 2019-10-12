const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-type','application/json');
    res.end(
        JSON.stringify({
            err:0,
            msg:'pm2 test server'
        })
    )
})

server.listen(8000);