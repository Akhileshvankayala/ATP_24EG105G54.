import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

const {verify}=jwt
export function verifyToken(req,res,next){
    //token verification logic
    //req.cookies is undefined
    //to access cookies property of request object we need cookie parser middle ware just like body parser middle ware to extract content of the body other wise req.cookie is undefined
    //console.log(req.cookies.token)
    const token=req.cookies?.token;
    //if tokens req from unauthorised user
    if(!token){
        return res.status(401).json({message:"please login"})
    }
    //if token is existed
    try{
    const decodedKey=verify(token,process.env.SECRET_KEY)
    console.log(decodedKey)
    req.user=decodedKey
    next()
    }catch(err){
        res.status(401).json({message:"session expired please relogin to continue"})
    }
}

//cross origin vs same origin
//cross origin requets means when a client and server applications are running in different domains
//same origin requests means when a client and server applications are running in same domain
//cookies will send along with requests automatically in same origin requests.But for cross origin requests,the token should be explicitly included to the requests
