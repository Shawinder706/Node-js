const mongoose = require('mongoose');  //  install mongoose from cmd using npm 
const Dishes = require('./models/dishes'); // import dishes module
const url    = 'mongodb://localhost:27017/conFusion';  // db url 
const connect = mongoose.connect(url); // create connection between db and mongoose . conFusion is db name

connect.then((db) => {

    console.log('Connected correctly to server');
    
    var newDish = Dishes({
        name : 'shawinder singh',
        description:'test'

    });
    newDish.save()
        .then((dish)=>{
            console.log(`save ${dish}`)
           // return Dishes.find({});
        });
        .then((dishes)=>{
            console.log(`remove ${dishes}`)
            return Dishes.remove({});
        })
        .then(()=>{
            return mongoose.connection.close();
        });
});