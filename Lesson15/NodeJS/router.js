function route(handle, pathname, response, query) {
    console.log("About to route a request for " + pathname);    
    if(typeof handle[pathname] === 'function') {
        console.log('query: ' + query);
        handle[pathname](response, query);
    } else {        
        console.log("No request handler found for " + pathname);
        response.writeHeader(404, {'Content-type': 'text/html'});
        response.write("<h1>Error: 404 Not found</h1>");
        response.end();
    }
}

exports.route = route;