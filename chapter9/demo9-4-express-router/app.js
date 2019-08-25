var createError = require('http-errors');
var express = require('express');
var path = require('path');
// 解析 cookie
var cookieParser = require('cookie-parser');
// 日志记录
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const  blogRouter = require('./routes/blog');
const blogUserRouter = require('./routes/blog-user');
var app = express();

// view engine setup
// 视图引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); 
//  获取 post数据
app.use(express.json()); 

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog',blogRouter);
app.use('/user',blogUserRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
