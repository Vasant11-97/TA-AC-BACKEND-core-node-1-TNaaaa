var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response) {
  console.log(request.headers, request.method, request.url);
  response.end('welcome to node');
}

server.listen(3000, () => {
  console.log('server is hosted');
});
