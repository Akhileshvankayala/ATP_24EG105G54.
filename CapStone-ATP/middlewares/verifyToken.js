import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()


const {verify}=jwt
export const verifyToken=(...role)=>{
    return (req,res,next)=>{
    try{
    const token=req.cookies?.token;
    if(!token){
        return res.status(401).json({message:"please login"})
    }
    let decodedKey=verify(token,process.env.SECRET_KEY)//if token is invalid it throes an error
    if(!role.includes(decodedKey.role)){
        return res.status(403).json({message:"you are not authorised"})
    }
    req.user=decodedKey
    //check the role is same as role in the decodedToken
    next()
    }catch(err){
        res.status(401).json({message:"session expired please relogin to continue"})
    }
}
}