const mysql = require('mysql');
const {MYSQL_CONF} = require('../config/db');

const con = mysql.createConnection(MYSQL_CONF);
// 开启连接
con.connect();

//统一执行 sql的函数
// 'select * from blogs'
function exec (sql) {
    return new Promise((resolve, reject) => {
        con.query( sql, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }
             
            resolve(result)
            return;
        })
    })
}
 
// con.end(); //保持连接

module.exports = {
    exec
}