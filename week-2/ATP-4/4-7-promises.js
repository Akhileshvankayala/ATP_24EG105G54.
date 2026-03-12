//promise
    //pending
        //fulfilled or rejected

        //task:call you in 5 seconds!!
console.log("frnd waiting for call in 5 seconds")
let futureCondition=true;
//promise producer(create promise)
const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("hiii how are u!!!!!")
        }
        else{
            rejected("busy call you later")
        }
    },5000)
});
//console.log(promiseObj)//by default pending state
//promise consumer
promiseObj.then((message)=>{console.log("message in then ",message)})
.catch((errorMessage)=>{console.log("error message")})