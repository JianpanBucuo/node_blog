const redis = require('redis');
const { REDIS_CONF } = require('../config/db');

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', err => {
    console.log(err);
})

function set(key, value) {
    if (typeof value == 'object') {
        value = JSON.stringify(value);
    }
    redisClient.set(key, value, redis.print);
}

function get (key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }

            if (val == null) {
                resolve(null);
                return;
            }

            // 兼容 JSON
            try {
                resolve(JSON.parse(val));
            } catch (ex) {
                resolve(val);
            }

            console.log('val',val);
            resolve();
        })
    })
    return promise;
}
module.exports = {
    get,
    set
}
// redisClient.quit(); 保持连接
