const env = process.env.NODE_ENV; //环境变量

let MYSQL_CONF = {};

if (env == 'dev') {
    console.log('env',env);
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'jinjian94530!@',
        port: '3306',
        database: 'myblog'
    }
} 
else if (env == 'production') {
    console.log('env',env);
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'jinjian94530!@',
        port: '3306',
        database: 'myblog'
    }
} else {
    console.log('env',env);
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'jinjian94530!@',
        port: '3306',
        database: 'myblog'
    }   
}
module.exports = {
    MYSQL_CONF
}