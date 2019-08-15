const { getList, 
        getDetail,
        newBlog,
        updateBlog,
        delBlog } = require('../controller/blog');
const { SuccessModel, 
        ErrorModel } = require('../model/resModel');

//统一登录验证函数

const loginCheck = (req) => {
    if (!req.session.username) {
        return Promise.resolve(new ErrorModel('未登录'));
    }    
}

const handleBlogRouter = (req, res) => {
    const method = req.method;
    //获取博客列表
    if (method == 'GET' && req.path == '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
 
        const result = getList(author, keyword);
        return result.then((listData) => {
            return new SuccessModel(listData,'');
        })
    }
    if (method == 'GET' && req.path == '/api/blog/detail') {
        const id = req.query.id || ''; //博客id
        const data = getDetail(id);
        // return new SuccessModel(detailData, '');
        return data.then(detailData => {
            return new SuccessModel(detailData[0],'');           
        })
    }   
    //新建一篇博客
    if (method == 'POST' && req.path == '/api/blog/new') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }  
        req.body.author = req.session.username //待开发 开发登录后使用真数据
        const blogData = req.body;
        const data = newBlog(blogData);
        return  data.then(blogData => {
            return new SuccessModel(blogData,'');  
        })
    }
    //更新一篇博客
    if (method == 'POST' && req.path == '/api/blog/update') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }  
        const blogData = req.body;
        const id = blogData.id;
        const result = updateBlog(id, blogData);
        return result.then(val => {
            if (val) {
                return new SuccessModel(blogData,'更新博客成功');  
            } else {
                return new ErrorModel(blogData,'更新博客失败');  
            }
        }) 
    }

    //删除一篇博客
    if (method == 'POST' && req.path == '/api/blog/delete') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }  
        const blogData = req.body;
        const id = blogData.id;
        const author = req.session.username //待开发 开发登录后使用真数据    
        const result = delBlog(id, author);
        return result.then((val) => {
            if (val) {
                return new SuccessModel(val, '删除博客成功');
            } else {
                return new ErrorModel('删除博客失败')
            }
        })
    }
}

module.exports = handleBlogRouter;
