var express = require('express');
var app = express();

app.use(express.static('web'));

// app.get('*', function(req, res) {
// 	res.sendfile('../web/index.html');
// });


module.exports = {
    start: function(port) {
        var server = app.listen(port, function() {
            console.log('web server start.');
        });
    }
};
