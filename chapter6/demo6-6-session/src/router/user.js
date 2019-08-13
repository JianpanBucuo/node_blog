const {login} = require('../controller/user');
const { SuccessModel, 
        ErrorModel } = require('../model/resModel');

 
const handleUserRouter = (req, res) => {
    const method = req.method;
    //登录
    if (method == 'GET' && req.path == '/api/user/login') {
        // const { username, password } = req.body;
        const { username, password } = req.query;
        const result = login(username, password);
 
        return result.then(row => {
            console.log(row,'row');
            if( row.username) {
                //操作cookie
                // res.setHeader('Set-Cookie',`username=${row.username}; path=/; httpOnly;expires=${getCookieExpires()}`);
                // 加了 httpOnly 限制浏览器控制不了cookie
                req.session.username = row.username;
                req.session.realname = row.realname;
                console.log(req.session,'req.session');
                return new SuccessModel(result, '登录成功');
            } else {
                return new ErrorModel('登录失败')
            }
        })
    }
    //登录测试
    if (method == 'GET' && req.path == '/api/user/login-test') {
         
        if (req.session.username) {
            // return new SuccessModel(result, '登录成功');

            return Promise.resolve(new SuccessModel( req.session,'登录成功'))
        } else {
            return Promise.resolve(new ErrorModel('登录失败'))            
            // return new ErrorModel('登录失败')
        }
    }
}
module.exports = handleUserRouter;