import { Schema,model } from "mongoose";
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already existed"]
    },
    password:{
        type:String,
        required:[true,"password is mandotory"]
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        required:[true,"{Value} is and Invalid role"]
    },
    profileImageURL:{
        type:String
    },
    isUserActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true,
    versionKeys:false,
    strict:"throw"//will throw the silent errors too
});
export const UserModel=model("user",userSchema)
