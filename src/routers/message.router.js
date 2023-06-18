const express=require("express")
const router=new express.Router()
const Message=require("../models/message.model")

router.post("/new", async (req,res)=>{
    const message=new Message(req.body)
    try{
        await message.save()
        res.send(message)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get", async (req,res)=>{
    try{
        const messages=await Message.find({})
        res.send(messages)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

module.exports=router;