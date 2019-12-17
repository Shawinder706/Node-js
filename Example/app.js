const express=require('express');
const routes=require('./routes');
const http=require('http');
const path=require('path');
const urlEncoded=require('url');
const bodyPparser=require('body-parser');
const json=require('json');
const logger=require('logger');
const methodOverride=require('method-override');

const nano=require('nano')('http://localhost:5984');

const db=nano.use('address');
var app=express();

app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

app.use(bodyPparser.json())
app.use(bodyPparser.urlencoded())
app.use(methodOverride())
app.use(express.static(path.join(__dirname,'public')))

app.get('/',routes.index)


app.post('/createdb',function(req,res){
    
    nano.db.create(req.body.dbname,function(err,data){
        if(err){
            console.log(req.body.dbname+"here")
            res.end('error creating database '+req.body.dbname);
            return
        }        
        res.end('database '+req.body.dbname+' created successfully');
    })

});



app.post('/new_contact', function(req,res){
    let name = req.body.name
    let phone= req.body.phone
    db.insert({name:name,phone:phone,crazy:true},phone, function(err,body,header){
        if(err){
            res.end("error creating contact");
            return
        }
        res.send("contact created successfully")   
    })
});


app.post('/view_contact',function(req,res){
    var alldoc='following are the contacts'
    db.get(req.body.phone,{revs_info:true},function(err,body){
        if(!err){
            console.log(body)
        }
        if(body){
            alldoc+=' Name '+body.name+' and Phone Number: '+body.phone;

        }
        else{
            alldoc="no records found"
        }
        res.end(alldoc)
    });
});

app.post('/delete_contact',function(req,res){
    db.get(req.body.phone,{revs_info:true},function(err,body){
        if(!err){
            db.destroy(req.body.phone, body._rev,function(err,body){
                if(err){
                    res.end('error deleting contacts')
                }
                res.end("contacts deleted succesfully")
            })
        }
    })
})


http.createServer(app).listen(app.get('port'),function(){
    console.log(`express server is listening on port ${app.get('port')}`);
})