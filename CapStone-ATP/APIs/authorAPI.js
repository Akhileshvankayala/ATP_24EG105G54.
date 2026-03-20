import exp from "express"
import { UserModel } from "../models/userModel.js"
import { ArticleModel } from "../models/articleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"
export const authorApp=exp.Router()
//write article
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{
    const articleObj=req.body // expected to contain author (user id)
    const user=req.user

    const author=await UserModel.findById(articleObj.author)
    if(!author){
        return res.status(404).json({message:"invalid author"})
    }

    if(user.email !== author.email){
        return res.status(403).json({message:"you can publish articles only for your account"})
    }

    //create article document
    if(author.role==="AUTHOR"){
        const article=new ArticleModel(articleObj)
        await article.save()
        return res.status(201).json({message:"article added succesfully"})
    }
    return res.status(403).json({message:'the user id mentioned doesnt belong to author'})

})

//read own articles
authorApp.get("/article",verifyToken("AUTHOR"),async(req,res)=>{
    // const user=req.user
    // const roleObj=await UserModel.find({email:user.email})
    // console.log(roleObj_Id)
    // const articles=ArticleModel.find({_id:roleObj._id})
    // console.log(articles)
    const idOfToken=req.user?.id
    const getArticles=await ArticleModel.find({author:idOfToken})
    res.status(200).json({message:"articles are below",payload:getArticles})
})
//edit article
authorApp.put("/article",verifyToken("AUTHOR"),async(req,res)=>{
    const authorToken=req.user?.id
    const {articleId,title,category,content}=req.body

    const updated = await ArticleModel.findOneAndUpdate(
        {_id:articleId,author:authorToken},
        {$set:{title,category,content}},
        {new:true}
    )

    if(!updated){
        return res.status(404).json({message:"article not found or not owned by you"})
    }

    return res.json({message:"article updated successfully",payload:updated})
})
//delete / deactivate article
authorApp.patch("/article",verifyToken("AUTHOR"),async(req,res)=>{
    const authorToken=req.user?.id
    const {articleId,isArticleAlive}=req.body

    // if (typeof isArticleAlive !== "boolean") {
    //     return res.status(400).json({message:"isArticleAlive must be a boolean"})
    // }

    const updated = await ArticleModel.findOneAndUpdate(
        {_id:articleId,author:authorToken},
        {$set:{isArticleActive:isArticleAlive}},
        {new:true}
    )

    if(!updated){
        return res.status(404).json({message:"article not found or not owned by you"})
    }

    return res.json({message:"article status updated",payload:updated})
})