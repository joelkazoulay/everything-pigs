var express = require('express');
var compression = require('compression');
var app = express();

var oneDay = 86400000;

var logger = function(req, res, next) {
  console.log("GOT REQUEST !");
  next(); // Passing the request to the next handler in the stack.
};

app.use(logger); // Here you add your logger to the stack.

// compress all requests
app.use(compression());

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(5678);
console.log('Server running at ' + 5678);