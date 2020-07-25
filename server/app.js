var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const fs = require('fs');

const doesBuildDirExist = () => {
  try {
    return fs.existsSync(path.join(__dirname, '..', 'frontend', 'build'));
  } catch (err) {
    return false;
  }
};

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const otherRouter = require('./routes/otherRouter');
const coursesRouter = require('./routes/courses');
const authRouter = require('./routes/auth');
const scriptRouter = require('./services/scripts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serving a frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
} else if (doesBuildDirExist) { // only serve build if exists. Explicit for code readability.
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
} else {
  app.use(express.static(path.join(__dirname, 'public'))); // Fallback in case the frontend build does not exist (dev only)
}

// Setup mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/otherRoute', otherRouter);
app.use('/courses', coursesRouter);
app.use('/scraping', scriptRouter);
app.use('/auth', authRouter);

// Serving the frontend on wildcard. NEEDS TO REMAIN ABOVE 404 error
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
} else if (doesBuildDirExist) {
  // checks to be able to see server endpoints in development
  app.get('/*', (req, res) => {
    // probably will never serve the generator files gain
    // res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html'));
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
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
