var express = require('express');

var PORT = process.env.PORT || 3030;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.write('Hello World');
  res.end();
});
app.listen(PORT);
