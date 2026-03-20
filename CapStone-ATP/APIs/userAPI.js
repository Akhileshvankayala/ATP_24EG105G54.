import exp from "express"
export const userApp=exp.Router()
import { verifyToken } from "../middlewares/verifyToken.js"
import { ArticleModel } from "../models/articleModel.js"
//Xxs csrf

//read articles of all users
userApp.get("/articles",verifyToken("USER"),async(req,res)=>{
    const articlesList=await ArticleModel.find({isArticleActive:true})
    return res.status(200).json({message:"articles",payload:articlesList})
})

//add comments to the articles
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    const {articleId,comment}=req.body
    //console.log("hi")
    const validArticle=await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    //if article not found
    if(!validArticle){
        return req.stats(404).json({message:"article not found"})
    }
    //get the user id
    const userId=req.user.id
    // console.log(userId)
    //add comment ti the validArticle
    validArticle.comment.push({user:userId,comment:comment})
    //save the document
    await validArticle.save()
    //return response
    res.status(200).json({message:"comment added succefully",payload:validArticle})

})