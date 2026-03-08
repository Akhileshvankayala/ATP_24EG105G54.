/*
a function can be called as a First class object because:
a function can be stored in a variable
a function cn return another function
can receive a function as arg 
*/
//console.log(test())//undefined
let createGame=(level,nameOfPlayer)=>console.log(`hello ${nameOfPlayer}, you are at level ${level}`)//finction without reusability
let createGame1=function(name){//function with reusability
    return function(level){
        console.log(`hello ${name}, you are at level ${level}`)
    }
}//closure property of function
let levelName=createGame1("akki")
levelName(1)
levelName(2)
levelName(3)

// let test=function(a){
//     console.log(a());//use a() to call that function which is being taken as an argument
// }
// test(10)
// test("hello")
// test([1,2,3])
// test(function(){})
let makePayment=function(amount,paymentType){
    console.log(`payment of ${amount} ha sstarted`)
    paymentType()
}
let UPIPayment=function(){
    console.log(`upi payment started`)
}
let cardPayment=function(){
    console.log(`card payment started`)
}
makePayment(10000,UPIPayment)//make payment is the main function and UPIpayment is the callback function
//every javascript funcyion has closure by default and becase of this closur property thr variables of outside scope will be maintained temporarily in the heap evn after the outside function execution is completed!!
//e.g
let sum=function(x){
    return function(y){
        return x+y;
    }
}
let result=sum(10);
console.log(result(20))//30