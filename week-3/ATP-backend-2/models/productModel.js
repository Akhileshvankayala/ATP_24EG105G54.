import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"product id is required"],
        unique:[true,"product id already existed"]

    },
    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,'minimum price is 10000'],
        max:[500000,"maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
},{timestamps:true,
    versionKey:false
},);

export const productModel=model("product",productSchema);