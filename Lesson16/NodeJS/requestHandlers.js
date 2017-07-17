var fs = require('fs');

function start(response, query) {
    console.log("Start");
    fs.readFile('templates/index.html', 'utf8', function(err, contents) {
        response.writeHeader(200, {'Content-type':'text/html'});
        response.write(contents);
        response.end();
    });
}

function getName(response, query) {
    var data = {
      names: [
          "Даша", 
          "Маша",
          "Миша",
          "Валя",
          "Тоня",
          "Дима"
      ]  
    };
    
    var resp = data.names.filter(function(name){
        return name.indexOf(query.q) != -1;
    });
    //console.log(data);
    console.log(query);
    
    response.writeHeader(200, {'Content-type':'application/json; charset=utf-8'});
    response.write(JSON.stringify({names: resp}));
    response.end();
}

exports.start = start;
exports.getName = getName;