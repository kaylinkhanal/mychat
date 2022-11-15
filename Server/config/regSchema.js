const mongoose=require('mongoose');
const regSchema=mongoose.Schema({
    username:String,
    password:String,
    confirmpassword:String,
    number:Number
});
module.exports=mongoose.model("users",regSchema)