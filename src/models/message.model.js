const mongoose=require("mongoose")
const messageSchema=new mongoose.Schema({
    content:{
        type:String,
        lowercase:true,
        trim:true,
        minlength:1
    },
})

module.exports=mongoose.model("Message",messageSchema)
