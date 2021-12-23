// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     console.log(req, res);
// }

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     res.end('My first server in NodeJS');
// }

// server.listen(5001, () => {
//     console.log('Server is listening on port 5001');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     console.log(req.headers);
//     console.log(res.headers);
// }

// server.listen(5555, () => {
//     console.log('Server is listening on port 5555');
// })

// let http = require('http');
// let url = require('url');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(req.url, req.method);
// }

// server.listen(5566, () => {
//     console.log('Server is listening on port 5566');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     // var request = req.headers;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`${req.headers}`);
// }

// server.listen(7000, () => {
//     console.log('Server is listening on port 7000');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//     res.statusCode = 202;
//     res.end(console.log(res.statusCode));
// }

// server.listen(3333, () => {
//     console.log('Server is listening on port 3333');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<h1>Welcome to AltCampus</h1>');
// }

// server.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Welcome to AltCampus</h1>');
// }

// server.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// })

// let http = require('http');
// var server = http.createServer(handleServer);

// function handleServer(req, res){
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
// }

// server.listen(8888, () => {
//     console.log('Server is listening on port 8888');
// })

// let http = require('http');
// var server = http.createServer(handleServer);
// var url = require('url');

// function handleServer(req, res){
//     console.log(req.method);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Posted for the first time.</h1>');
// }

// server.listen(5050, () => {
//     console.log('Server is listening on port 5050');
// })

// let http = require('http');
// var server = http.createServer(handleServer);
// var url = require('url');

// function handleServer(req, res){
//     var parsedurl = url.parse(req.url);
//     var pathname = parsedurl.pathname;

//     if(req.method === 'GET' && req.url === '/'){
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Vasant Saraswat')
//     } else if(req.method === 'GET' && req.url === '/about'){
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Vasant Saraswat</h2>');
//     } else{
//         res.writeHead(404, {'Content-Type' : 'text/html'});
//         res.end('<h2>Page Not Found</h2>');
//     }
// }

// server.listen(2345, () => {
//     console.log('Server is listening on port 2345');
// })

// let http = require('http');
// var server = http.createServer(handleServer);
// var url = require('url');

// function handleServer(req, res) {
//   var parsedurl = url.parse(req.url);
//   var pathname = parsedurl.pathname;

//   if (req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<input type="text" name="name" placeholder="Your Name">');
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h2>Posted For Second Time</h2>');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h2>Page Not Found</h2>');
//   }
// }

// server.listen(2345, () => {
//   console.log('Server is listening on port 2345');
// });


let http = require('http');
var server = http.createServer(handleServer);
var url = require('url');

function handleServer(req, res) {
  var parsedurl = url.parse(req.url);
  var pathname = parsedurl.pathname;

  console.log(parsedurl.pathname);
}

server.listen(2345, () => {
  console.log('Server is listening on port 2345');
})