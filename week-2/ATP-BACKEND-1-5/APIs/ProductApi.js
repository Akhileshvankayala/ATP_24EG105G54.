//create a product API with below operations
    //create new product({productId,name,brand,price})
    //read all products
    //read all products by brand
    //update a product
    //delete a product by id

    //create mini express app
import exp from 'express';
export const productApp=exp.Router();

let products=[]

productApp.get('/products',(req,res)=>{
    res.json({message:"all products are listed below,",payload:products})
})

productApp.get('/products/:name',(req,res)=>{
    let nameOfURL=req.params.name
    console.log(nameOfURL)
    let productOfBrand=products.filter(productObj=>productObj.brand===nameOfURL)
    console.log(productOfBrand)
    if(productOfBrand.length===0){
        res.json({message:"product is not there"})
    }
    else{
        res.json({message:"product of that brand is found",payload:productOfBrand})
    }
})

productApp.post('/products',(req,res)=>{
    //get the info from the client
    let product=req.body
    //push to the products
    products.push(product)
    //send response
    res.json({message:"product is posted"})
})

productApp.put('/products',(req,res)=>{
    let product=req.body
    //find the index of the body
    let index=products.findIndex(productObj=>productObj.id===product.id)
    //replace using splice
    products.splice(index,1,product)
    //send response
    res.json({message:"product details updated"})
})

productApp.delete('/products/:id',(req,res)=>{
    let productId=Number(req.params.id)
    let index=products.findIndex(productObj=>productObj.productId===productId)
    console.log(index)
    if(index==-1){
        res.json({message:"product id not found"})
    }else{
        products.splice(index,1)
        res.json({message:"product id is deleted"})
    } 

})



//GET resource url(where get is the http protocol type)