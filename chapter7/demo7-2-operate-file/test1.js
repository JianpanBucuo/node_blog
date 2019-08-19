const fs = require('fs');
const path = require('path'); // 
// __dirname 当前文件的目录
//获取文件
const fileName = path.resolve(__dirname, 'data.txt');


//读取文件内容
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);//二进制
    console.log(data.toString());
})

//写入文件
const content = '这是新写入的内容';
const opts = {
    flag: 'w',// 追加写入 覆盖用 w
}
/*
fileName, 写入的文件
content， 写入的内容
opts，    写入的方式
callback  回调 
*/

fs.writeFile(fileName, content, opts, (err) => {
    if (err) {
        console.log(err);
        return;
    }
})


//判断文件是否存在
fs.exists(fileName, (exist) => {
    console.log(exist,'exist')  // true false
})