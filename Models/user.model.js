const  mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})
 
const UserModel  =mongoose.model("users" ,userSchema)
module.exports = UserModel ;