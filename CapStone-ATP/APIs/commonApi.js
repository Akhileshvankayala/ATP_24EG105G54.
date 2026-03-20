import exp from "express"
import { UserModel } from "../models/userModel.js"
import {hash,compare} from "bcryptjs"
import { config } from "dotenv"
import jwt from "jsonwebtoken"
import { verifyToken } from "../middlewares/verifyToken.js"
const {sign}=jwt
export const commonApp=exp.Router()

config()

//route for registration
commonApp.post("/users",async(req,res)=>{
    let validRoles=["USER","AUTHOR"]
    //get user from request
    const newUser=req.body
    console.log(newUser)
    if(!validRoles.includes(newUser.role)){
        return res.status(400).json({message:"invalid role"})
    }
    //run validators manually

    
    //
    newUser.password=await hash(newUser.password,12)
    //create new user document
    const newUserDoc=new UserModel(newUser)
    //error before this line->console.log(newUser.password)
    await newUserDoc.save()
    res.status(201).json({message:"user created succesfully"})
})
//route for login
commonApp.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const verificationEmail=await UserModel.findOne({email:email})
    if(!verificationEmail){
        return res.status(404).json({message:"user not found"})
    }
    let result=await compare(password,verificationEmail.password)
    if(result===false){
        return res.status(400).json({message:"password doesnt match"})
    }
    const signedToken = sign(
        { email: verificationEmail.email, role: verificationEmail.role, id: verificationEmail._id },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    )

    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })

    const userObj = verificationEmail.toObject()
    delete userObj.password
    res.status(200).json({message: "login success", payload: userObj})
})
//route for logout
// commonApp.put("/users",(req,res)=>{
//     req.cookies?.token=""
// })
commonApp.get("/logout",(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"user succesfully logged out"})

})

//change password
commonApp.put("/password",verifyToken("USER","ADMIN","AUTHOR"),async(req,res)=>{
    //check the current password and new password are same
    const {currentPassword,newPassword}=req.body
    if(currentPassword===newPassword){
        return res.status(400).json({message:"password shouldnt be same"})
    }
    //get current password from the user from the database
    const userId=req.user?.id
    const user=await UserModel.findOne({_id:userId})
    const result=await compare(newPassword,user.password)
    //check if the current password matches the currentpassword in the database
    if(result===true){
        return res.status(403).json({message:"please send the correct password"})
    }
    //hash and update the password in the database
    const newHashedPass=await hash(newPassword,12)
    user.password=newHashedPass
    user.save()//validators run only when we save the document in the database
    return res.status(200).json({message:"user password updated succesfully"})
})