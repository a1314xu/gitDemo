var server = require('./server');
var requestHandlers = require("./requestHandlers");
var router = require('./router');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);
