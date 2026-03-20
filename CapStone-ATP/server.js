import exp from 'express'
import { connect } from 'mongoose' 
import { config} from 'dotenv'
import { authorApp } from './APIs/authorAPI.js'
import { userApp } from './APIs/userAPI.js'
import { adminApp } from './APIs/adminAPI.js'
import { commonApp } from './APIs/commonApi.js'
import cookieParser from 'cookie-parser'
config()
//create express app
const app=exp()
//add cookie parser middle ware
app.use(cookieParser())
//order imp
//body parser middleware
app.use(exp.json())
//path level middle wares
app.use("/author-api",authorApp)
app.use("/user-api",userApp)
app.use("/admin-api",adminApp)
app.use("/auth",commonApp)
//asign port
const port=process.env.PORT ||5000
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("database connected succesfully")
        app.listen(port,()=>console.log(`server lsitening on ${port}...`))
    }catch(err){
        console.log("error in connecting to the database",err)
    }
}
connectDB()
//to handle invalid path
app.use((req,res,next)=>{
    res.status(404).json({message:`invalid path on request: ${req.url}`})
})
//to handle errors(error handling middle ware)
app.use((err,req,res,next)=>{//4 parameters are used only to let express know that its error handler middleware....velletappudu chudadhu error vachinappude return la ee error handler middleware appude work avvuddi(request vachinappudu ee middleware panicheyadhuuu)
    //res.json({message:"error occured",error:err.message}) -->we arent using this because it is basic error handling,so we must refine it litk below
    console.log(err)
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    if(err.name==="CastError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    //send serverside errors
    return res.status(500).json({message:"error is below",error:"server side error"})
    //validation error,cast error,,serverside error
})