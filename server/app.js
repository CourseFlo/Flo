var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
// const path = require('path');

// Routers
// var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const otherRouter = require('./routes/otherRouter');
const coursesRouter = require('./routes/courses');
const scriptRouter = require('./services/scripts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Setup mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/users', usersRouter);
app.use('/otherRoute', otherRouter);
app.use('/courses', coursesRouter);
app.use('/scraping', scriptRouter);

if (process.env.NODE_ENV === 'production') {
  const BUILD = path.resolve(__dirname, 'frontend/build');
  app.use(express.static(BUILD));
  app.get('*', (req, res) => {
    console.log("actually serving front end other paths though");
    res.sendFile(path.join(BUILD, '/index.html'));
  });
  app.get('/', function(req, res) {
    console.log("actually serving front end");
    res.sendFile(path.join(BUILD, '/index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
