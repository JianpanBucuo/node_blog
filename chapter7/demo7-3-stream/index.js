// 标准输入输出
// pipe 输入后 立刻 输出 演示管道
const http = require('http');
const fs = require('fs');
const path = require('path');
// process.stdin.pipe(process.stdout);

const sever = http.createServer((req, res) => {
    if(req.method == 'POST') {
        req.pipe(res);
    }
    if (req.method == 'GET') {
        let fileName1 = path.resolve(__dirname,'data.txt')
        let readStream = fs.createReadStream(fileName1);
        readStream.pipe(res);
    }
});
sever.listen(8000);