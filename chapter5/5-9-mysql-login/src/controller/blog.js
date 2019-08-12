const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
    let sql = 'select * from blogs where 1 = 1 ';
    if (author) {
        sql += `and author = '${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += `order by createtime desc`;
    return exec(sql);
}

const getDetail = (id) => {
    let sql = `select * from blogs where id = '${id}'`;
    return exec(sql);
    
}
const newBlog = (blogData = {}) => {
    //blogData是一个对象，包含 title content
    const title = blogData.title;
    const content = blogData.content;
    const author = blogData.author;
    const createtime = Date.now();
    const sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', '${createtime}', '${author}')`;
    return exec(sql).then(insertData => {
        console.log('insertData',insertData);
        return {
            id: insertData.insertId
        }
    });
}
const updateBlog = (id, blogData = {}) => {
    //id 要更新的博客的id
    console.log(id, blogData);
    const title = blogData.title;
    const content = blogData.content;
    const createtime = Date.now();
    let sqlIn = `set createtime= '${createtime}'`;
    if (title) {
        sqlIn += `, title ='${title}'`;
    }
    if (content) {
        sqlIn += `, content = '${content}'` ;
    }
    
    let sql = `update blogs ${sqlIn} where id='${id}'`
    console.log(sql);
    return exec(sql).then((updateData) => {
        console.log('updateData',updateData);
        if (updateData.affectedRows > 0) {
            // 影响行数 大于 0 
            return true
        } else {
            return false;
        }

    })
}

const delBlog = (id,author) => {
    const sql = `delete from blogs where id = '${id}' and author = '${author}'`;
    return exec(sql).then((delData) => {
        if (delData.affectedRows > 0) {
            // 影响行数 大于 0 
            return true
        } else {
            return false;
        }
    })
}
 
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}