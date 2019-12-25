const express   = require('express');
const bodyParser= require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req, res, next)=>{
    res.statuscode=200;
    res.setHeader('content-type','text/html');
    next();
})

.get((req,res,next)=>{
    res.end("This is get request");
    
})

.post((req,res,next)=>{
    res.end('this is post resquest'+req.body.name);
})

.put((req,res,next)=>{
    res.statusCode=404;
    res.end("Put operation is not supported");
})

.delete((req,res,next)=>{
    res.end("deleting all leaders");
});

leaderRouter.route('/:leadId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    next()
})

.get((req,res,next)=>{
    res.end('This is leader id request for '+req.method+ ' method');
})

.post((req,res,next)=>{
    res.end('This is leader id request for '+req.method+ ' method');
})

.put((req,res,next)=>{
    res.end('This is leader id request for '+req.method+ ' method');
})

.delete((req,res,next)=>{
    res.end('This is leader id request for '+req.method+ ' method');
})

module.exports=leaderRouter;