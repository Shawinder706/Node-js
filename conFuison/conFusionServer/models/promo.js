const mongoose=require('mongoose')
require('mongoose-currency').loadType(mongoose)
const Currency=mongoose.Types.Currency
const Schema = mongoose.Schema

const promotionSchema = new Schema({
    name:{
        type:String,
        required:true        
    },
    Image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:""
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamp:true
})

var promos = mongoose.model('Promo',promotionSchema);

module.exports=promos;