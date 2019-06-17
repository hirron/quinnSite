var express = require('express');
var path = require('path');
var publicDir = require('path').join(__dirname,'/public');

console.log("Made it to favicon")

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


console.log("Made it to routes")
var routes = require('./routes/index');
var users = require('./routes/users');
var users = require('./routes/database');


console.log("Made it to express")
var app = express();
app.use(express.static(publicDir));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


console.log("made it to app use")
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

console.log("made it to stack trace")
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen((process.env.PORT || 8080), function() {
  console.log('I\'m Listening...')
});

global.appRoot = path.resolve(__dirname);
module.exports = app;
