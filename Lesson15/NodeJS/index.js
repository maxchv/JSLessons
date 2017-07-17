var server = require("./server");
var route = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/getname'] = requestHandlers.getName;

server.start(route.route, handle);