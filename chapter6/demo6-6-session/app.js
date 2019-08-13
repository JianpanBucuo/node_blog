const queryString = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

// session数据
const getCookieExpires = () => {
    const d= new Date();
    d.setTime(d.getTime() + 24 * 60 * 60);
 
    return d.toGMTString();
}    
const SESSION_DATA = {

} 
 
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});   
            return;         
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk;
        })
        req.on('end',() => {
            if(!postData) {
                resolve({});
                return;
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise;
}

const serverHandle =  (req, res) => {
    // 设置返回格式 json
    console.log(SESSION_DATA,'SESSION_DATASESSION_DATA')
    res.setHeader('Content-type','application/json');
    //获取url
    const url = req.url;
    req.path = url.split('?')[0];
    // 解析 query
    req.query = queryString.parse(url.split('?')[1]);
    //解析 cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie|| ''; //k1=v1;k2=v2;
    cookieStr.split(';').forEach(item => {
        if (!item) {
            return;
        }
        const arr = item.split('=');
        const key = arr[0].trim();
        const value = arr[1].trim();
        req.cookie[key] = value;
    });
    let needSetCookie = false;


    let userId = req.cookie.userid;
    if(userId) {
        if(!SESSION_DATA[userId]) {
            SESSION_DATA[userId] = {};
        }         
    } else {
        needSetCookie = true;
        userId = `${Date.now()}_${Math.random()}`;
        console.log(userId);
        SESSION_DATA[userId] = {};
    }
    // 两个对象指针指向相同的堆内存
    req.session = SESSION_DATA[userId]

    // 处理postData
    getPostData(req).then((postData) =>{
        req.body = postData;
        return req;
    }).then(() => {
        //处理 blog路由
        const blogResult =  handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then(blogData => {
                    if (needSetCookie) {
                        res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly;expires=${getCookieExpires()}`);
                    }
                    res.end(
                        JSON.stringify(blogData)
                    );
                }) 
            return;        
        }
 
 
        //处理 user路由
        const userResult = handleUserRouter(req, res);
        if (userResult) {
            userResult.then(userData => {
                if (needSetCookie) {
                    res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly;expires=${getCookieExpires()}`);
                }
                res.end(
                    JSON.stringify(userData)
                );
            })
            return;
        }
        //未命中路由，返回404
        res.writeHead(404, {'Content-type':'text/plain'});
        res.write('404 Not Found');
        res.end();
    })
}
module.exports = serverHandle;
 