let express = require('express');
let router = express.Router();
const { getList, 
    getDetail,
    newBlog,
    updateBlog,
    delBlog } = require('../controller/blog');
const { SuccessModel, 
    ErrorModel } = require('../model/resModel');


router.get('/list',(req, res, next) => {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';

    const result = getList(author, keyword);
    return result.then((listData) => {
        res.json(new SuccessModel(listData,'')) ;
    })
})
module.exports = router;