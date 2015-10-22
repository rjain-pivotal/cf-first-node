var express = require('express');
var port = process.env.PORT || 3030;

var app = express();

app.get('/', function (req, res) {
  res.write('Hello World');
  res.end();
});

app.get('/env', function (req, res) {
  var now = new Date();
  var port = process.env.PORT;
  var vcapApplication = JSON.parse(process.env.VCAP_APPLICATION || '{}');
  var vcapServices = process.env.VCAP_SERVICES;
  res.json({
       title: 'PCF ENV Variables', 
       now: now.toLocaleString(), 
       port: port, 
       vcapApplication: JSON.stringify(vcapApplication), 
       vcapServices: JSON.stringify(vcapServices) 
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});



app.listen(port);

