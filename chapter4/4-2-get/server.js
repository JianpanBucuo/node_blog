const http = require('http');
const queryString = require('querystring');  //处理 连接后的参数
const server = http.createServer((req, res) => {
    console.log(req.method);
    const url = req.url;
    // 获取 get参数
    req.query = queryString.parse(url.split('?')[1]);
    console.log(req.query);

    res.end(JSON.stringify(req.query));
})
server.listen(8000);