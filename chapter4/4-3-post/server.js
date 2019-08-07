const http = require('http');
const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        // 客户端向服务端请求的 请求头 req数据格式
        console.log('content-type',req.headers['content-type']); //json类型
        //接收数据      
        let postData = '';
        req.on('data', chunk => {
        // 每次来数据都是触发 data事件
            postData += chunk.toString();
        })
        req.on('end',() => {
            console.log(postData);
            res.end('hello world');
        })
    }
})
server.listen(8000);