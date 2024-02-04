require('dotenv').config();
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const LoginSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const collections=new mongoose.model("collection1",LoginSchema)

module.exports=collections
