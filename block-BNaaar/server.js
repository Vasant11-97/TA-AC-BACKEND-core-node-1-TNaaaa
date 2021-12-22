var http = require('http');
var url = require('url');
var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var parsedUrl = url.parse(req.url);
    var pathName = parsedUrl.pathname;

    if(req.method === 'GET' && req.url === '/'){
        res.write('Welcome to the Home Page');
        res.end();
    } else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to the ABout Page</h1>');
    } else if(req.method === 'GET' && pathName ==='/users'){
        res.end('Welcome to the Users Page');
    } else if(req.method === 'POST' && pathName === '/users'){
        res.end('Posted for the first time');
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2>Page Not Found</h2>');
    }
}

server.listen(5000, ()=> {
    console.log('Server is listening on port 5000');
});