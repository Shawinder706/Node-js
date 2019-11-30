const express = require("express");

const parser =  require('body-parser')

const tusharRouter =express.Router()

tusharRouter.use(parser.json())

tusharRouter.route('/')

.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    next();
})


.get((req,res,next)=>{
    res.end(`This is ${req.method} method`);
})

.post((req,res,next)=>{
    res.end(`This is ${req.method} method`);
})

.put((req,res,next)=>{
    res.end(`This is ${req.method} method`);
})

.delete((req,res,next)=>{
    res.end(`This is ${req.method} method`);
})

tusharRouter.route('/:id')

.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    next();
})


.get((req,res,next)=>{
    res.end(`This is ${req.method} method ${req.url}`);
})

.post((req,res,next)=>{
    res.end(`This is ${req.method} method ${req.url}`);
})

.put((req,res,next)=>{
    res.end(`This is ${req.method} method of ${req.url}`);
})

.delete((req,res,next)=>{
    res.end(`This is ${req.method} method ${req.url}`);
})


module.exports=tusharRouter;