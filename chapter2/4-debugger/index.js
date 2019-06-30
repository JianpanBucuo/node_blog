console.log(100);
console.log(200);

const http = require('http'); //内置模块
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type':'text/html'
    })
    console.log(req);
    res.end('<h1>hello world</h1>');
})

server.listen(3000, () => {
    console.log('Listening on 3000')
});