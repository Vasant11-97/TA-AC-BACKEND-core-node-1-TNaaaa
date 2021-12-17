console.log('Welcome to node environment');

var os = require('os');
console.log(os.freemem(), os.cpus().length, os.uptime(), os.version());

var readFiles = require('fs');
readFiles.readFile('', 'utf8', (err, content) => {
  console.log(content);
});

console.log('non-blocking First');
setTimeout(() => {
  console.log('non-blocking middle');
}, 2000);
console.log('last');
var { readFile, readFileSync, unlike, fstat } = require('fs');
var sync = readFileSync('./app.js');