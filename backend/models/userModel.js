const mongoose = require("mongoose");

const UserSchema=mongoose.Schema({
  name:{type:String,required:true},
  username:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:Number,required:true},
  password:{type:String}
},{
  versionKey:false
})
const UserModel= mongoose.model("Users",UserSchema);

module.exports={
    UserModel
}