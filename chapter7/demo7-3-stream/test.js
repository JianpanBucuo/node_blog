// stream 方法 读写文件
const fs = require('fs');
const path = require('path');

let fileName1 = path.resolve(__dirname, 'data.txt');
let fileName2 = path.resolve(__dirname, 'bak.txt');

//读取文件的 stream对象 读取流
let readStream = fs.createReadStream(fileName1);

//写入文件的 stream对象 写入流
let writeStream = fs.createWriteStream(fileName2);
var a = 1;


// 拷贝 数据是一点点流过去的
readStream.pipe(writeStream);
readStream.on('data', (chunk) => {
    console.log(chunk.toString());
    console.log(a++);
})
readStream.on('end',() => {
    console.log('已完成')
});