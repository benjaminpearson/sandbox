var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world 2');
});

app.listen(8081);
console.log('Application running');
