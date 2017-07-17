var http = require('http');
var url = require('url');

function start(route, handle) {        
    function onRequest(request, response){               
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url, true).query;
        console.log("Request for " + pathname + " received");
        
        route(handle, pathname, response, query);        
    }
    
    http.createServer(onRequest).listen(8000);
    console.log("Server has started at port 8000");
}

exports.start = start;
