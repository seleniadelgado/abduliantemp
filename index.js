var PORT = process.env.PORT || 5000;
var path = require('path');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
bodyParser = require('body-parser');


// Routes
homeRouter= require('./routes/home');
aboutRouter = require('./routes/about');
injuriesRouter = require('./routes/injuries');
settlementsRouter = require('./routes/settlements');
contactRouter = require('./routes/contact');
sendEmail = require('./routes/send-email');

var app = express();
var http = require('http');
var server = http.Server(app);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './dist/views'));
app.set('view engine', 'ejs');
app.use('/assets', express.static('./dist/assets'));
app.use(express.static('./'));
app.use(express.static('src'));
app.use(expressLayouts);
app.use(express.json());

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/injuries', injuriesRouter);
app.use('/settlements', settlementsRouter);
app.use('/contact', contactRouter);
app.use('/send-email', sendEmail);

server.listen(PORT, function() {
	console.log('Server is running');
})

var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('message', function(msg) {
		io.omit('message', msg);
	});
});
