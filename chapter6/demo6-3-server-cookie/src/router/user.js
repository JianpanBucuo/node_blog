const {login} = require('../controller/user');
const { SuccessModel, 
        ErrorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
    const method = req.method;
    //登录
    if (method == 'POST' && req.path == '/api/user/login') {
        const { username, password } = req.body;
        const result = login(username, password);
        return result.then(row => {
            if( row.username) {
                return new SuccessModel(result, '登录成功');
            } else {
                return new ErrorModel('登录失败')
            }
        })
    }
    //登录测试
    if (method == 'GET' && req.path == '/api/user/login-test') {
        if (req.cookie.username) {
            // return new SuccessModel(result, '登录成功');
            return Promise.resolve(new SuccessModel( '登录成功'))
        } else {
            return Promise.resolve(new ErrorModel('登录失败'))            
            // return new ErrorModel('登录失败')
        }
    }
}
module.exports = handleUserRouter;