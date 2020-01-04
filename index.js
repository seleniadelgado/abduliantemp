var PORT = process.env.PORT || 5000;
var path = require('path');
var jquery = require('jquery');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

// Routes
homeRouter= require('./routes/home');
aboutRouter = require('./routes/about');
injuriesRouter = require('./routes/injuries');
settlementsRouter = require('./routes/settlements');
contactRouter = require('./routes/contact');

var app = express();
var http = require('http');
var server = http.Server(app);

app.set('views', path.join(__dirname, './dist/views'));
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(express.static('src'));
app.use(expressLayouts);
app.use(express.json());
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/injuries', injuriesRouter);
app.use('/settlements', settlementsRouter);
app.use('/contact', contactRouter);

server.listen(PORT, function() {
	console.log('Server is running');
})

var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('message', function(msg) {
		io.omit('message', msg);
	});
});
