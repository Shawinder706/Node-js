const mongoose =require('mongoose')
//const Dishes  = require("./models/dishes")
const url='mongodb://localhost:27017/conFusion'
const connect = mongoose.connect(url)

const session =require('express-session')
const FileStore = require('session-file-store')(session)

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



connect.then((db)=>{
  console.log("connected correctly to server")
}),(err)=>{console.log(err)}



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// my routes
var dishRouter  = require('./routes/DishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter= require('./routes/leaderRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());


// basic authentication 

app.use(session({
  name:'session-id',
  secret:'12345-6789-09876-54321',
  saveUninitialized:false,
  resave:false,
  store:new FileStore()

}));

function auth(req,res,next){
  console.log(req.session)
  if(!req.session.user){
    var authHeader=req.headers.authorization
    if(!authHeader){
      var err=new Error("you are not authenticated!");
      res.setHeader('www-Authenticate','Basic')
      err.status=401,
      next(err)
      return
    }

    var auth=new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':')
    var user=auth[0]
    var pass=auth[1]

    if(user=='user' && pass=='password'){
      req.session.user='user';
      next();
    }else{
      var err = new Error('you are not autheticated!')
      res.setHeader('www-Authenticate','Basic')
      err.status=401,
      next(err)
    }
  }
  else{
    if(req.session.user==='admin'){
      console.log('req.session:',req.session)
      next(err)
    }
  } 

}

app.use(auth)
app.use(express.static(path.join(__dirname, 'public/html/')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/dishes',dishRouter);
app.use('/promo',promoRouter);
app.use('/leader',leaderRouter);

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
