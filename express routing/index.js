const express = require('express');
const http    = require('http');

const port =6000;
const host ="localhost";

const app  = express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html')
    res.send("<html><body>I am here</body></html>")
})

const server = http.createServer(app);

server.listen(port,host,()=>{
    console.log("server is running on" +port);
})

