'use strict';

var http = require('http');

function start() {
  var server = http.createServer(function (request, response) {
    console.log(request.method + ',' + request.url);
    response.writeHead(200, {'Content-Tyoe': 'text/html'});

    response.end('<h1>hello wrold</h1>')
  });
  server.listen(8088);
  console.log('Server is running....');
}
module.exports = {start: start};
