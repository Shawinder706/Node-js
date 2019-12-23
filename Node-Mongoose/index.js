const mongoose = require('mongoose');  //  install mongoose from cmd using npm 
const Dishes = require('./models/dishes'); // import dishes module
const url    = 'mongodb://localhost:27017/conFusion';  // db url 
const connect = mongoose.connect(url); // create connection between db and mongoose . conFusion is db name

connect.then((db) => {

    console.log('Connected correctly to server');
    
    Dishes.create({
        name: 'Ut',
        description:"welcome Uthappizza",        
    })
    .then((dish) => {
        console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id,{
            $set:{description:"updated test"}
        },{
            new:true
        })
        .exec();
    })
    .then((dish) => {
        console.log(dish);
        dish.comments.push({
            rating:5,
            comment: 'I\ m gettting a sinking feeling !',
            author:'leonardo di carpaccio'
        })
    })
    .then(() => {
        return mongoose.connection.close();
    })
        return dish.save()
})
.then((dish) =>{
    console.log(dish)
    return Dishes.remove({ });
})
.catch((err)=>{
    console.log(err)
});
