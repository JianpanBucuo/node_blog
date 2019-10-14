const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Cur time', new Date());
    // console.error('假装出错')
    if(req.url == '/err') {
        throw new Error('进程崩溃');
    } 
    res.setHeader('Content-type','application/json');
    res.end(
        JSON.stringify({
            err:0,
            msg:'pm2 test server1'
        })
    )
})

server.listen(8000);