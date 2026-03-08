//destructuring-unpacking

//unpacking array
let arr=[1,2,4,5]
let [a,b,c,d]=arr;//array of variables
console.log(a,b,c,d)
//unpacking object
let emp={
    empid:100,
    company:"tcs",
    address:{
        city:"hyd"
    }
}
let{empid,company,address:{city}}=emp;//array of properties
console.log(empid,company,city)