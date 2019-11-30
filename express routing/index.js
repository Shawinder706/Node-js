
const http    = require('http');
const express = require('express');
const app     = express();


const shawi   = require('./routes/shawinder');
const tushar  = require('./routes/tushar');
const aman    = require('./routes/aman');
 
const port = 6000;
const host ="localhost";

app.use('/shawinder',shawi);
app.use('/shawinder/:id',shawi);

app.use('/tushar',tushar);
app.use('/tushar/:id',tushar);

app.use('/aman',aman);
app.use('/aman/:id',aman);

const server = http.createServer(app);

// listen the server
server.listen(port,host,()=>{
    console.log("server is running on" +port);
})

