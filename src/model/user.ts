const userMongoose=require('mongoose');

const userSchema=new userMongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    tech:{
        type:String,
        required:true,
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports=userSchema