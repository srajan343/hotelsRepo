const res = require('./first.js');
console.log(res.age);
var abc = res.add(res.age,18);
console.log(abc);

var _ = require('lodash');
const arr = [1,1,2,2,3,3,4,4,5,5,5,5,5,5,6,6,6,8,,2,5,5,5,2,45,4];
var unique = _.uniq(arr);
console.log(unique);
