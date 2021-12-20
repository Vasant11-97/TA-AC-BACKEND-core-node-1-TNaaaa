var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response) {
//   response.writeHead(201, {'Content-Type' : 'text/html'});
  response.setHeader('Content-Type', 'text/html')
  response.write('Hello');
  response.write('World');
  response.end('<h1> Hello World! Welcome to node!');
}

server.listen(4444, () => {
  console.log('server is hosted');
});
