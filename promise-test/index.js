const fs = require('fs');
const path = require('path');

// 第一种方法读取数据
// 获取文件的绝对路径
// const fullFileName = path.resolve(__dirname, './files/a.json');
// fs.readFile(fullFileName, (err, data) => {
//     // data读出来默认是二进制
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })



// 第二种方法读取数据
// callback 方式获取一个文件的内容
// function getFileContent (filename, callback) {
//     const fullFileName = path.resolve(__dirname, 'files', filename);
//     fs.readFile(fullFileName, (err, data) => {
//         // data读出来默认是二进制
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // console.log(data.toString());
//         callback(
//             JSON.parse(data.toString())
//             );
//     })    
// }
// getFileContent('a.json', aData => {
//     console.log(aData);
//     getFileContent(aData.next, bData => {
//         console.log(bData);
//         getFileContent(bData.next, cData => {
//             console.log(cData);
//         })
//     })
// })

// 第三重方法
// promise解决回调
// 将callback 写成平铺的方式

function getFileContent(fileName) {
    return new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName);
        fs.readFile(fullFileName, (err, data) => {
            // data读出来默认是二进制
            if (err) {
                reject();
                return;
            }
            resolve(JSON.parse(data.toString()));   
        })
    })
}
getFileContent('a.json').then(aData => {
    console.log(aData);
    return getFileContent('b.json');
}).then(bData => {
    console.log(bData);
    return getFileContent('c.json');
}).then(cData => {
    console.log(cData);
})

//  async await