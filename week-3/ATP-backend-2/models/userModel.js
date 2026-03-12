//import mongoose from "mongoose";
import {Schema,model} from 'mongoose'
//create user Schema and generate user model
//create cart schema(product,count)
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,//type is objectId   its not string because its objectyID(string)
        ref:"product"//name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})
//user schema
const userSchema=new Schema({
    //structure of the user resource
    //validators only work at the time of new creation and not updation
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,'username must be of minimum 4 characters'],
        maxLength:[8,'username must be of maximum 8 characters']
        //can also add regex pattern using pattern (schema type)
    },
    password:{  
        type:String, 
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]//unique is not a validation rule(it is an option)
        //unique is applied only on the empty database only!!
    },
    age:{
        type:Number
    },
    cart:[cartSchema],//can accept values of cartSchema type
},
{
    timestamps:true,
    versionKey:false,
},
);
//in schema creation we write mongoose type format for eg.string-js data type and String-mongoose data type

//generate user model
export const userModel=model("user",userSchema)//collection with users will be created,user-singular,users-plural automatically will be created bu mongodb
