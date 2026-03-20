import exp from "express"
import { ArticleModel } from "../models/articleModel.js"
export const adminApp=exp.Router()

adminApp.get("/article",async(req,res)=>{
    const articles=await ArticleModel.find()
    console.log(articles)
})