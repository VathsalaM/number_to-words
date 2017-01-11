var http = require('http');
var controller = require('./lib/src/controller.js');
var server = http.createServer(controller);

server.listen(8080);