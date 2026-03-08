// synchronous js
// executing instructions one after the other
//every loop is synchronous


// asynchronous javascript-doesnt block the control
console.log("first");
setTimeout(()=>{
    console.log("delay completed")
},5000)
console.log('second')

/*
setTimeout(()=>{},timeout); anonymous function is taken as argument called by setTimeout
setInterval(()=>{},timeout);
*/
//set interval will call that callback function after every timeout(like for every 2seconds if timeout=2)
let a=1
setInterval(()=>{
    console.log('hii');
    a++
    if(a==5){
        clearInterval(intervalId);
    }
},1000)