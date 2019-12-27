const mongoose=require('mongoose')
require('mongoose-currency').loadType(mongoose)
const Currency=mongoose.Types.Currency
const Schema = mongoose.Schema

const leaderSchema = new Schema({
    name:{
        type:String,
        required:true        
    },
    image:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        require:true
    },
    abbr:{
        type:String,
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

var leaders = mongoose.model('Leader',leaderSchema);

module.exports=leaders;