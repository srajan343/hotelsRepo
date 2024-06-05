var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greet.txt' , 'hola ' + user.username + ' hihi \n', ()=>{console.log("file is created");});