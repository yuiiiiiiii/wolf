/**
 * 开启Web Socket
 */

var websocket = require('./websocket');
websocket.start(8080);

/**
 * 开启Web Server
 */
var webserver = require('./webserver');
webserver.start(81);


process.on('uncaughtException', function(err) {
    console.log(err.stack);
});