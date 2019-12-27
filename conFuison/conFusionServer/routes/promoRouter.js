const express = require('express');
const bodyparser = require('body-parser');
const promos =require('../models/promo')
const promoRouter = express.Router()

promoRouter.use(bodyparser.json())

promoRouter.route('/')

.get((req,res,next)=>{
    promos.findById()
        .then((promo)=>{
            console.log(promo);
            res.statusCode=200;
            res.setHeader("content-type","application/json")
            res.json(promo)
        },(err)=>next(err))
        .catch((err)=>next(err))
})

.post((req,res,next)=>{
    console.log(req.body)
    promos.create(req.body)
        .then((promo)=>{
            res.statusCode=200;
            res.setHeader('content-type','application/json')
            res.json(promo)
        },(err)=> next(err))
        .catch((err)=>next(err))
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation not supported on /promos")
})

.delete((req,res,next)=>{
    promos.remove({})
        .then((resp)=>{
            res.statusCode=200
            res.setHeader('content-type','application/json')
            res.json(resp)
        },(err)=>next(err))
        .catch((err)=>next(err));
})

promoRouter.route('/:promoId')

.get((req,res,next)=>{
    promos.findById(req.params.promoId)
        .then((promo)=>{
            res.statusCode=200
            res.setHeader('content-type','application/json')
            res.json(promo)
        },(err)=>next(err))
        .catch((err)=>next(err))
})

.post((req,res,next) => {
    res.statusCode=403
    res.end("Put operation not supported on /promos/"+req.params.promoId)
})

.put((req,res,next)=>{
    promos.findByIdAndUpdate(req.params.promoId,{
        $set:req.body
    },{
        new:true
    })
    .then((promo)=>{
        res.statusCode=200
        res.setHeader('Content-Type','application/json')
        res.json(promo)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

.delete((req,res,next)=>{
    promos.findByIdAndRemove(req.params.promoId)
        .then((resp)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json')
            res.json(resp)
        },(err)=>next(err))
        .catch((err)=> next(err))
})


module.exports=promoRouter;