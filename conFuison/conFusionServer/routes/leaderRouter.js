const express   = require('express');
const bodyParser= require('body-parser');
const Leaders   = require("../models/leader")
const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')


.get((req,res,next)=>{
    Leaders.findById()
        .then((leader)=>{
            console.log(leader);
            res.statusCode=200;
            res.setHeader("content-type","application/json")
            res.json(leader)
        },(err)=>next(err))
        .catch((err)=>next(err))
})

.post((req,res,next)=>{
    console.log(req.body)
    Leaders.create(req.body)
        .then((leader)=>{
            res.statusCode=200;
            res.setHeader('content-type','application/json')
            res.json(leader)
        },(err)=> next(err))
        .catch((err)=>next(err))
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation not supported on /Leaders")
})

.delete((req,res,next)=>{
    Leaders.remove({})
        .then((resp)=>{
            res.statusCode=200
            res.setHeader('content-type','application/json')
            res.json(resp)
        },(err)=>next(err))
        .catch((err)=>next(err));
})

leadersRouter.route('/:leaderId')

.get((req,res,next)=>{
    Leaders.findById(req.params.leaderId)
        .then((leader)=>{
            res.statusCode=200
            res.setHeader('content-type','application/json')
            res.json(leader)
        },(err)=>next(err))
        .catch((err)=>next(err))
})

.post((req,res,next) => {
    res.statusCode=403
    res.end("Put operation not supported on /Leaders/"+req.params.leaderId)
})

.put((req,res,next)=>{
    Leaders.findByIdAndUpdate(req.params.leaderId,{
        $set:req.body
    },{
        new:true
    })
    .then((leader)=>{
        res.statusCode=200
        res.setHeader('Content-Type','application/json')
        res.json(leader)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

.delete((req,res,next)=>{
    Leaders.findByIdAndRemove(req.params.leaderId)
        .then((resp)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json')
            res.json(resp)
        },(err)=>next(err))
        .catch((err)=> next(err))
})

module.exports=leadersRouter;