var http = require ("http"),
    fs = require ("fs"),
    parser = require("./params_parser.js"),
    render = require("./render_view.js");

var p = parser.parse;
var r = render.render;

http.createServer(function(req, res){
  fs.readFile("./index.html", function(err, html){
    var parametros = p(req);
    res.writeHead(200,
      {"Content-Type": "text/html"});
    res.write(r(html, parametros));
    res.end();
  });
}).listen (8080);
