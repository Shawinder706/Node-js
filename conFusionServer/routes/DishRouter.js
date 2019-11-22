const express = require('express');
const bodyParser = require('body-parser');

const DishRouter = express.Router()

DishRouter.use(bodyParser.json())

DishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    next()
})

  .get((req,res,next) => {
    res.end('Will send all the dishes to you!');
    console.log('Request URL:', req.originalUrl);    
   })
   .post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' withdetails: ' + req.body
         .description);
   })
   .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
   })
   .delete((req, res, next) => {
    res.end('Deleting all dishes');
   })

  // id routing
   DishRouter.route('/:dishId')
   .all((req,res,next)=>{
        res.statusCode =200;
        res.setHeader('Content-Type','text/html')
        console.log('Request URL:', req.originalUrl);
        next()
    })

    .get((req,res,next) => {
        res.end('Hello!'+req.url);        
    })
    .post((req, res, next) => {
    res.end('Id: ' + req.body.name + ' withdetails: ' + req.body
            .description);
    })
    .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/id');
    })
    .delete((req, res, next) => {
    res.end('Deleting all dishes/id');
    })
     


   
   module.exports = DishRouter;

