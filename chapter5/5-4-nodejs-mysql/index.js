const mysql = require('mysql');

//创建连接对象

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jinjian94530!@',
    port: '3306',
    database: 'myblog'
})

//开始连接
con.connect();

//执行sql语句
const sql = 'select * from blogs';
const updateSql = 'update users set realname = "Nic" where username = "lisi"'
const insertSql = "insert into blogs(title, content, createtime, author) values ('标题a', '内容a', '1565315246040','gre');";
con.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
})
//关闭连接
con.end();