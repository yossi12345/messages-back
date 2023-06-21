const express=require("express")
const router=new express.Router()
const Message=require("../models/message.model")

router.post("/new", async (req,res)=>{
    try{
        const message=await Message.create(req.body)
        res.send(message)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get", async (req,res)=>{
    try{
        const messages=await Message.findAll()
        if (messages)
            return res.send(messages)
        res.send([])
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

module.exports=router;