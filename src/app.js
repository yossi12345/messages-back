const express=require("express")
const cors=require("cors")
const helmet=require("helmet")
const messageRouter=require("./routers/message.router")
const app=express()

app.use(express.json())
app.use(cors())
app.use(helmet())
 
app.use(express.json());

app.get('/',async (_,res)=>{res.send("Node.js server")})

app.use(messageRouter)

app.all("*",async (_,res)=>{
    res.status(404).send({
        success:false,
        statusCode:404,
        statusText:"Not Found",
        message:"nothing to see here",
    })
})
module.exports=app