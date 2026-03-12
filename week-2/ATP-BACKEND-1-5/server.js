//create http sever
import exp from 'express';//module already developed so no path required and it is a default export so we are taking the name as exp
const app=exp();//app is a special variable name to hold express application
import {userApp} from './APIs/UserAPI.js';
import {productApp} from './APIs/ProductApi.js';
//express application internally contains http server+many things
//every http requiresa port number to listen to the client requests

//use body parser middleware
app.use(exp.json())//exp.json will call a return a new function...so lets say that function anme is dummy then it will look like app.use(dummy),therefore there are no parenthesis

const port=3000//set port number
app.listen(port,()=>console.log("sever listening on port numer:",port))//used to assign port number to the http server
//http server on a computer is called as a webserver,as http software is installed in my pc

//APIs-connection between the applications
//we should genrally keep server and apis in differenet files
// REpresentational State Transfer-REST API
//app.method(path,request handler)

//test data(replace this test data with database)


//create custom middleware
//middleware is a function
function middleware1(req,res,next){
    //here next is forward to the next middle ware
    //send response from the middleware
    res.json({message:"this is the response of middleware1"})
    next()//to call the next middleware(if next middleware not there it is passed to the next route)
    //if there is no next the application will hold the request object and there is no response hence it will wait for the infinite amount of time
    //be careful while using this otherwise the application will be in the waiting state
}
function middleware2(req,res,next){
    console.log("middleware2 executed")
    next();
}
//use middleware
app.use(middleware1)
app.use(middleware2)

//forward request to user-api if if path starts with /user-api
app.use('/user-api',userApp)
//forward request to user-api if if path starts with /user-api
app.use('/product-api',productApp)
//user tarvata brackets la raaindee middleware

//server start means reinitialising all the files

