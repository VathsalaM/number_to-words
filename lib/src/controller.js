var fs = require('fs');
var bodyParser = require('body-parser');
var Converter = require('./converter.js');
var converter = new Converter();

var express = require('express');
var app = express();

app.use(function(req, res, next){
  next();
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/convert', function(req, res) {
	var number = req.body.number;
	var words = converter.convert(number);
	res.send({words:words});
});

module.exports = app;