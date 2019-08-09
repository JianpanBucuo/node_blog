const { exec } = require('../db/mysql');
const getList = (author, keyword) => {
    let sql = 'select * from blogs where 1 = 1 ';
    if (author) {
        sql += `and author = '${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}'% `;
    }
    sql += `order by createtime desc`;
    return exec(sql);
}

const getDetail = (id) => {
    return  {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: '1565161391958',
        author:'张三',
    }
}
const newBlog = (blogData = {}) => {
    //blogData是一个对象，包含 title content
    return {
        id: 3 //新建博客，插入到数据表里的id
    }
}
const updateBlog = (id, blogData = {}) => {
    //id 要更新的博客的id
    console.log(id, blogData);
    return true;
}

const delBlog = (id) => {
    return true;
}
 
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}