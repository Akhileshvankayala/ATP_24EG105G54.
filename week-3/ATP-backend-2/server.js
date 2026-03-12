//create express app
import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
config();//expose to process  so we should write process.env.something and process is a global object in the node js environemnet

const app=exp()
app.use(exp.json())
app.use(cookieParser())
//forward req to userApp if it starts with \user-api
app.use('/user-api',userApp)
app.use('/product-api',productApp)
//connect to DB server
//async and awit is the mordern wat=y to consume a promise instead of then and catch
// async function funcion_name(){
//     try{ 
//         let res=await fetch("") //await before evry blocking request
//         let result1=result.json()
//         console.log(result1)
//     }catch(err){
//         console.log(err)
//     }
// }
const port=process.env.PORT || 4000
async function connectDB(){
    try{
    await connect(process.env.DB_URL)//127.0.0.1:27017
    console.log("DB connected successfully")
    //start http server only when the databse conection is sucecsful
    app.listen(port,()=>console.log("server started on port no 4000"))//http server will start here
    }catch(err){
        console.log("error in db connection:",err)
    }
}
connectDB()
//client side---middleware--webserver(httpserver,application,databases)
//error handling middleware-always keep at the end of the server.js file
app.use((err,req,res,next)=>{//4 parameters are used only to let express know that its error handler middleware....velletappudu chudadhu error vachinappude return la ee error handler middleware appude work avvuddi(request vachinappudu ee middleware panicheyadhuuu)
    //res.json({message:"error occured",error:err.message}) -->we arent using this because it is basic error handling,so we must refine it litk below
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
//error =>{name,message,cell stack}