/* Hello, World! program in node.js 
console.log("Hello, World!")*/
var http = require("http");


http.createServer(function(request, response){	
	console.log(request.url);
	response.writeHead(500, {'Content-Type' : 'text/plain'});
	
	response.end("Hello, World!\n");
	next();
}).listen(8081);
console.log('Server: http://localhost:8081/');
app.get('*', function(req, res) {
    res.sendfile('default.html'); // load the single view file (angular will handle the page changes on the front-end)
});