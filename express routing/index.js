const express = require('express'); // require express module
const http    = require('http');

// require all routes
//const shawi   = require('./routes/shawinder');
const tushar  = require('./routes/tushar');
const aman    = require('./routes/aman');
 
const port =6000;
const host ="localhost";

const app  = express();

app.all('/shawinder',(req,res,next)=>{

    res.statusCode=200;
    res.setHeader('content-type','text/html');
    console.log("I am in all")
    next();
});



app.get('/shawinder',(req,res)=>{
    res.statusCode=200;
    res.send("<html><body>This is get method</body></html>")
})

app.post('/shawinder',(req,res)=>{
    res.statusCode=200;
    
    res.send("<html><body>This is post method</body></html>")
})

app.put('/shawinder',(req,res)=>{
    res.statusCode=200;
    
    res.send("<html><body>This is put method</body></html>")
})

app.delete('/shawinder',(req,res)=>{
    res.statusCode=200;
    
    res.send("<html><body>This is delete method</body></html>")
})

const server = http.createServer(app); // create http server

// listen the server
server.listen(port,host,()=>{
    console.log("server is running on" +port);
})

