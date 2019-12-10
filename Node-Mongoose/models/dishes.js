const mongoose = require('mongoose')
const assert = require('mongoose-assert')

const Schema = mongoose.Schema


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
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true,
        minlength:7        
    }

},
    {
        timestamps : true
    }
)


var Dishes = mongoose.model('Dish', dishSchema);

// user.path('name').validate(function (name) {

//     // Your validation code here, should return bool
  
//   }, 'Some error message');
module.exports = Dishes;


