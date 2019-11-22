const express = require('express');
const bodyparser = require('body-parser');

const promoRouter = express.Router()

promoRouter.use(bodyparser.json())

promoRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html')
    next()
})

.get((req,res,next)=>{
    res.end('This is promocode get request')
})

.post((req,res,next)=>{    
    res.end('This is promocode  post request'+ req.body.name)
})

.put((req,res,next)=>{
    res.statusCode=404;
    res.end('Prormocode for put request is not supported')
})

.delete((req,res,next) => {
    res.end('deleting all promocodes');
});

promoRouter.route('/:promoId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    next()
})

.get((req,res,next)=>{
    res.end('This is promo id request for '+req.method+ ' method');
})

.post((req,res,next)=>{
    res.end('This is promo id request for '+req.method+ ' method');
})

.put((req,res,next)=>{
    res.end('This is promo id request for '+req.method+ ' method');
})

.delete((req,res,next)=>{
    res.end('This is promo id request for '+req.method+ ' method');
})

module.exports=promoRouter;