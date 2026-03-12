//filename should not have white spaces
//js id dynamically typed language,same variable can hold different datatype data
//c,java,c++ are statically typed languages
//declaration
let a;
//assignment
a=5;
//initialisation
let b=10;
let name1='akki';//string
let name2="deekshi";//string
let firstName="something";//camel casing while declarng variable
let status=true;//boolean
let marks=[12,13,14];//array homoegenous
let marks1=[12,"edo try","heheeh"];//heterogenus but dont use as it makes more complicated
//object
let person={
    pid:100,//key and value together is called as a property
    name:"teddy"
}
//printf laaga
console.log(a)
console.log(b)
let c=a+b;
console.log("a is",a,"b is",b,"and c is",c);
//same can be written as
console.log(`a is ${a}  b is ${b} and c is ${c}`); //string literal or template literal
console.log(typeof a)
//array [] and object {} both are of object type
//cell stack and heap memory
//strict eqaul to operator ===
for(let i=0;i<name1.length;i++){
    console.log(name1[i]);
}
//when used const,it must be declared tooo
/*
function fname(parameter){}
*/
//variable names-lower camel casing
//classes-uppercamel casing
function findSum(a,b){
    let c=a+b;
    console.log(c);
}
findSum(10," deeksuu");
//we can also store function in a  variable

let z=function(a,b){
    let c=a+b;
    return c;
}//anonymus function
console.log(z(9,8));//if function expression is used then calling mst be done after the function expression is written else there will be an error


//arrow function-to simplify a function expression
let z1=(a,b)=>a+b;
let result=z1(5,6)
console.log(result)
