const redis = require('redis');

//创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1');
redisClient.on('error', err => {
    console.log(err);
})

//测试
redisClient.set('myname', 'zhangsan2', redis.print);
console.log(1);
redisClient.get('myname', (err, val ) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(val);

    redisClient.quit();
})