const mongoose = require('mongoose');  //  install mongoose from cmd using npm 
const Dishes = require('./models/dishes'); // import dishes module
const url    = 'mongodb://localhost:27017/conFusion';  // db url 
const connect = mongoose.connect(url); // create connection between db and mongoose . conFusion is db name

connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({  // use create method instead save 
        name:"sharma45",
        description:"I am working at somewhere in delhi"
    })
    .then((dish)=>{
        console.log(`find documents ${dish}`)
        return Dishes.findByIdAndUpdate(dish._id,{
            $set:{description:"I am working at somewhere in chandigarh"}
        },{
            new: true  // false during updation make it true by defining
        })
        .exec();  
    })
    .then((dish)=>{
        console.log(`push ${dish}`)
        dish.comments.push({
            rating:5,
            comment: "I am getting a sinking feeling!  ",
            author: "leonardo di carpaccio"
        })
        return dish.save()
    })
    .then((dish)=>{
        console.log(dish)
        return Dishes.remove({})
    })
    .then(()=>{
        return mongoose.connection.close()
    })
    .catch((err)=>{
        console.log(err)
    });
    // var newDish = Dishes({
    //     name : 'shawinder singh',
    //     description:'test'

    // });
    // newDish.save()
    //     .then((dish)=>{  // dish arg represent current doc
    //         console.log(`save ${dish}`)
    //         return Dishes.find({});
    //     })
    //     .then((dishes)=>{
    //         console.log(`remove ${dishes}`)
    //         return Dishes.remove({});
    //     })
    //     .then(()=>{
    //         return mongoose.connection.close();
    //     });
});