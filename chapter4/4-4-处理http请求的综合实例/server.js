const http = require('http');
const queryString = require('querystring');
const server = http.createServer((req, res) => {
    const method = req.method; //方法
    const url = req.url; //url
    const path = url.split('?')[0]; //路径
    const query = queryString.parse(url.split('?')[1]); //get参数

    //设置返回格式为 json
    res.setHeader('Content-type','application/json');//返回格式设置为json  如果设置为 text/html 则返回 html 

    const resData = {
        method,
        url,
        path,
        query
    }
    if (method == 'GET') {
        res.end(JSON.stringify(resData));
    } else if (method == 'POST') {
        let postData = '';
        req.on('data', chunk => {
            console.log(chunk.toString());
            postData += chunk.toString();
        })
        console.log('POST');
        req.on('end', () => {
            console.log('end');
            resData.postData = postData;
            res.end(JSON.stringify(resData));

        })
    }
})
server.listen(8000);
console.log('OK');