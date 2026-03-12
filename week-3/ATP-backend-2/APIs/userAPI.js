//create mini-express app(seperate route)
import exp from 'express'
import {userModel} from '../models/userModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'//it supports common js msystem only hence we should only use default export
import { verifyToken } from '../middlewares/verifyToken.js'
import {config} from 'dotenv'
config()
const {sign}=jwt
export const userApp=exp.Router()

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from the client
    const {email,password}=req.body
    //verify email
    const verificationEmail=await userModel.findOne({email:email})
    //if email not existed
    if(!verificationEmail){
        return res.status(404).json({message:"user not found"})
    }
    // compare password
    // const pass=await hash(password,10)//costr factor is 10
    // const passthere=await userModel.findOne({password:pasword})
    let result=await compare(password,verificationEmail.password)
    if(result===false){
        return res.status(400).json({message:"password doesnt match"})
    }
    //if password is right 
        //generate a token
    const signedToken=sign({email:verificationEmail.email},process.env.SECRET_KEY,{expiresIn:"1h"})//without "" it is taken in seconds otherwise its milli seconds
        //send token in res
        // res.status(200).json({message:"login success",token:signedToken})
        //so instead of sending the response it must be stored in the http cookie
        res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",//relaxed restriction
            secure:false
        })
    //send res
    res.status(200).json({message:"login success",payload:verificationEmail})
})

//define user rest API routes

userApp.post('/users',async(req,res)=>{
    //get new user obj from body
    const newUser=req.body
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace the plain password with the hashed password
    newUser.password=hashedPassword
    //create new user document-here it is done within the api itself before inserting to the database
    const newUserDocument=new userModel(newUser)
    //save 
    const result=await newUserDocument.save()//create and insert will happen when save is called and now will save in database
    console.log("result:",result)
    //  send res
    res.status(201).json({message:"user created"})
})

//handling error in  rest api-automatic error handling done in express version 5

//read all users(protected)
userApp.get("/users",verifyToken,async(req,res)=>{
    let usersList=await userModel.find()
    res.status(200).json({message:"data is below",payload:usersList})
})
//read user by email
userApp.get("/user",verifyToken,async(req,res)=>{
    //read email from the request
    const emailOfUser=req.user?.email
    //read obj id from req params
    //const uid=req.params.id;
    //find user by id
    const userObj=await userModel.findOne({email:emailOfUser}).populate("cart.product")//replace the find with findById(uid) //here product is  the model not the member in the cart object
    //use find one method to read a document with non object id fields
    //use findById method to read a document with object id
    if(!userObj){
        return res.status(404).json({message:"User not found"})//refinement and also if return not written error as one request sends 2 responses then the eror will be cannot send headers after the response is sent
    }
    //send res
    res.status(200).json({message:"User info is below",payload:userObj})
})
//update user by id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    try{
    const modifiedUser=req.body
    const uid=req.params.id
    //hash the password
    const hashedPassword=await hash(modifiedUser.password,10)
    //replace the plain password with the hashed password
    modifiedUser.password=hashedPassword
    //find user by id
    //update the user
    //above 2 individual operations done by a single operation that is findByIdAndUpdate
    const updatedUser=await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true},)//findByIdAndUpdate returm the new updated document
    //send the response
    res.status(200).json({message:"updated the user info",payload:updatedUser})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"error",error:err.message})
}
})
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    const uid=req.params.id
    let deletedUser=await userModel.findByIdAndDelete(uid)
    if(!deletedUser){
        return res.status(404).json({message:"user not found,hence couldnt delete"}) 
    }
    res.status(200).json({message:"user deleted",payload:deletedUser})
})

//app.use(verifyToken)->for every request
//userApp.get(path,verifyToken,req handler)
//                 (middleware)

//add product to the cart
/*working route
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //read the product id
    let pid=req.params.pid
    //get currentdetails of teh user
    const emailOfUser=req.user?.email
    // get user from the data base
    // const user=await userModel.findOne({email:emailOfUser})
    // if(!user){
    //     res.status(404).json({message:"user not found please login"})
    // }
    // add product to the cart
    //before adding the product check if the product is there or not,if there increment the count and dont addf the product
    let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:pid}}})
    if(!result){
        res.status(404).json({message:"user not found please login"})
    }
    res.status(200).json({message:"product added succesfully",payload:result})
})
    */
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //read the product id
    let pid=req.params.pid  
    //get currentdetails of thye user
    const emailOfUser=req.user?.email
    //console.log(emailOfUser)
    // get user from the data base
    // const user=await userModel.findOne({email:emailOfUser})
    // if(!user){
    //     res.status(404).json({message:"user not found please login"})
    // }
    // add product to the cart
    //before adding the product check if the product is there or not,if there increment the count and dont addf the product
    let user=await userModel.findOne({email:emailOfUser})
    let findPid=user.cart.find((obj)=>obj.product===pid)
    console.log(findPid)
    if(findPid.product===pid){
        let countIncrement=findPid.count+1
        let result=userModel.findOneAndUpdate({email:emailOfUser},{$set:{cart:{count:countIncrement}}})
    }
    else{
        let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:pid}}})
    }
    if(!result){
        res.status(404).json({message:"user not found please login"})
    }
    res.status(200).json({message:"product added succesfully",payload:result})
})