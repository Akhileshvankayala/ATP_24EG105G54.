import {Schema,model,Types} from "mongoose"

const commentSchema=new Schema({
    user:{
    type:Types.ObjectId,
    ref:"user",
    required:[true,"userId is required"]
    },
    comment:{
        type:String,
        required:[true,"comment is required"]
    }
})
const articleSchema=new Schema({
    author:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"Author id is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    content:{
        type:String,
        required:[true,"content is required"]
    },
    comment:[{type:commentSchema,default:[]}],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})

export const ArticleModel=model("article",articleSchema)