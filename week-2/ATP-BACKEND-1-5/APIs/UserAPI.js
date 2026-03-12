//create mini-express app(Seperate Route)
import exp from 'express'
export const userApp=exp.Router()

let users=[]

//create USER API
    //route to handle get request of client(http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        //data is sent by the server to the client
        //send res to client
        //route handles the request and client sends the request
        res.json({message:"all users",payload:users})
        
    })
    
    //we need to write the url path as we already reached http server
    //route to handle post request of a client
    //data is sent by the client to the server
    //send res to the client

    userApp.get('/users/:id',(req,res)=>{
        //get user if URL param exists
        let idOfURL=Number(req.params.id);
        //find user
        let user=users.find(userObj=>userObj.id===idOfURL)
        if(user===undefined){
            res.json({message:"user not found"})
        }
        else{
            res.json({message:"user found",payload:user})
        }
        //send res
    })
    
    userApp.post('/users',(req,res)=>{

        //get new user from client
        let newUser=req.body
        //push user to users
        users.push(newUser)
        //send res  
        res.json({message:"user recieved"})
          
        

    })
    
    //route to handle put request of a client
    
    userApp.put('/users',(req,res)=>{
        //get the modified user from client
        let updateUser=req.body
        //get index of existing user
        let index=users.findIndex((userObj)=>userObj.id===updateUser.id)
        if(index===-1){
            res.json({message:"user not found"})
        }
        //update using splice
        users.splice(index,1,updateUser)
        //send response back
        res.json({message:"user updated"})
    })
    
    //route to handle delete request of a client
    
    userApp.delete('/users/:id',(req,res)=>{
        //get id of user from url parameter
        //url parameter values are always in string;
        let idOfURL=Number(req.params.id);
        //find index
        let index=users.findIndex((userObj)=>userObj.id===idOfURL)
        if(index===-1){
            res.json({message:"user not found"})
        }
        //delete user by index-splice
        users.splice(index,1)
        //send response
        res.json({message:"user deleted"})
    })
    //postman and rest client behaves like a client side application