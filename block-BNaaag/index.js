var fs = require('fs');
fs.readFile('index.md', (err,content) => {
    console.log(err, content.toString());
})

var newFs = require('fs');
newFs.readFile('index.js', (err,content) => {
    console.log('First code');
    var prom = new Promise((res, rej) => {
        setTimeout(() => res(console.log('Promise Resolved')), 2000);
    });
    console.log(prom);
    console.log('Last code');
})

var newBuffer = Buffer.alloc(20);
newBuffer.write('Welcome to AltCampus');
console.log(newBuffer.toString());
