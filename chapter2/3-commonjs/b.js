const {add, mul} = require('./a');
const _ = require('lodash');
console.log(add(1,2));
console.log(mul(4,5));

const arr = _.concat([1,2,3],5);
console.log(arr);
// 单一职能原则
// 开发封域原则