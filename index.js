var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('src'));

server.listen(PORT, function() {
	console.log('Server is running');
})

var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('message', function(msg) {
		io.omit('message', msg);
	});
});
