const mongoose = require('mongoose') // install mongoose from cmd using npm 

const Schema = mongoose.Schema

const commentSchema=new Schema({
    rating:{
        type:Number,
        main:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true        
    },
    comments:[commentSchema]    
},
    {
        timestamps : true
    }
)


var Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;


