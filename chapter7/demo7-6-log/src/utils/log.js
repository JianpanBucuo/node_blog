const fs = require('fs');
const path = require('path');

//生成 write Stream
function createWriteStream (fileName) {
    //  日志文件 绝对路径
    const fullFileName = path.join(__dirname,'../','../','logs',fileName);
    const writeStream = fs.createWriteStream(fullFileName,{
        flags: 'a'
    })
    return writeStream;
}
// 创建 写入流
const accessWriteStream = createWriteStream('access.log');

//写日志
function writeLog (writeStream, log) {
    writeStream.write(log + '\n');  //关键代码
}

function access (log) {
    writeLog(accessWriteStream, log);
    //判断开发环境
    // production 写入 log文件
    // development 打印出来
}
module.exports = {
    access
}