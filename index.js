var PORT = process.env.PORT || 5000;
var path = require('path');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

// Routes
indexRouter = require('./routes/home');

var app = express();
var http = require('http');
var server = http.Server(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(express.static('src'));
app.use(expressLayouts);
app.use(express.json());

app.use('/', indexRouter);

server.listen(PORT, function() {
	console.log('Server is running');
})

var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('message', function(msg) {
		io.omit('message', msg);
	});
});
