//rest parameter
let test=function(a){
    console.log(a)
} 
test(10,20,30)//no error only one argument is taken
function findSum(b,...a){//rest parameter,
    console.log(a)//here rest parameter packs all the n number of arguments into an array
}
findSum(10,20,30,40)