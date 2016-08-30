var express 	= require('express');
var app 		= express();
var mongoose	= require('mongoose');
var bodyParser 	= require('body-parser');

var port = 9000;

app.listen(port, function(){
	console.log('I\'m at your service & listening on', port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/client/index.html');
});

//client shortcuts
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/lib', express.static(__dirname + '/client/bower_components'));
app.use('/config', express.static(__dirname + '/client/js/config'));
app.use('/user', express.static(__dirname + '/client/module/user'));

//server apis
var userDao = require('./server/dao/user-dao');

//user apis
app.post('/api/user/login', userDao.login);
app.get('/api/user/:id', userDao.find);
app.post('/api/user', userDao.create);
// app.put('/api/user/:id', userDao.update);
// app.delete('/api/user/:id', userDao.remove);
app.get('/api/users', userDao.list);