const { getList, 
        getDetail,
        newBlog,
        updateBlog,
        delBlog } = require('../controller/blog');
const { SuccessModel, 
        ErrorModel } = require('../model/resModel');


const handleBlogRouter = (req, res) => {
    const method = req.method;
    //获取博客列表
    if (method == 'GET' && req.path == '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        // const listData = getList(author, keyword);
        // return new SuccessModel(listData,'');
        const result = getList(author, keyword);
        return result.then((listData) => {
            return new SuccessModel(listData,'');
        })
    }
    if (method == 'GET' && req.path == '/api/blog/detail') {
        const id = req.query.id || ''; //博客id
        const detailData = getDetail(id);
        return new SuccessModel(detailData, '');
    }   
    //新建一篇博客
    if (method == 'POST' && req.path == '/api/blog/new') {
        const blogData = req.body;
        const data = newBlog(blogData);
        return new SuccessModel(data, '');
    }
    //更新一篇博客
    if (method == 'POST' && req.path == '/api/blog/update') {
        const blogData = req.body;
        const id = blogData.id;
        const result = updateBlog(id, blogData);

        if(result) {
            return new SuccessModel(result, '更新博客成功');
        } else {
            return new ErrorModel('更新博客失败')
        }
    }

    //删除一篇博客
    if (method == 'POST' && req.path == '/api/blog/delete') {
        const blogData = req.body;
        const id = blogData.id;
        const result = delBlog(id);
        if(result) {
            return new SuccessModel(result, '删除博客成功');
        } else {
            return new ErrorModel('删除博客失败')
        }
    }
}

module.exports = handleBlogRouter;
