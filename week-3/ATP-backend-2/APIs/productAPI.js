import exp from 'express'
import { productModel } from "../models/productModel.js"
import { verifyToken } from '../middlewares/verifyToken.js'
export const productApp=exp.Router()


productApp.get('/products',verifyToken,async(req,res)=>{
    let result=await productModel.find()
    res.status(200).json({message:"all the product info is given below",payload:result})
})

productApp.get('/products/:id',verifyToken,async(req,res)=>{
    const id=Number(req.params.id);
    const result=await productModel.findOne({productId:id})
    if(!result){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user found",payload:result})
})

productApp.post('/products',async(req,res)=>{
    const product=req.body
    const newProductDocument=new productModel(product)
    const result=await newProductDocument.save()
    res.status(201).json({message:'product added succesfully',payload:result})
})

productApp.put('/products/:id',verifyToken,async(req,res)=>{
    const id=Number(req.params.id)
    const modifiedProduct=req.body
    const updatedProduct=await productModel.findOneAndUpdate({productId:id},{$set:{...modifiedProduct}},{new:true,runValidators:true})
    res.status(200).json({message:"updated product",payload:updatedProduct})
})

productApp.delete('/products/:id',verifyToken,async(req,res)=>{
    const id=Number(req.params.id)
    const deletedProduct=await productModel.findOneAndDelete({productId:id})
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})