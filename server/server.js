var express = require('express');
var compression = require('compression');

var app = express();

var oneDay = 86400000;

// compress all requests
app.use(compression());

app.use(express.static(__dirname + '/../src', { maxAge: oneDay }));

app.use('/node_modules/', express.static(__dirname + '/../node_modules'));

var server = app.listen(5678, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});