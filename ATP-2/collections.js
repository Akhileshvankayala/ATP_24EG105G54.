//collection is a pack of data
/*Array(pack of elements of same data type),object(pack of properties),array of objects */
let marks=[90,80,70]
let names=["deekshi","akki"]
for(let i of marks){
    //for of keyword-element level accessing
    console.log(i)
}
//object
let student={
    sno:100,
    name:"deekshi",//key-value pair
    age:20,
    course:"B.Tech"
}
console.log(student)//student is the reference of the object
console.log(student.sno)//preferred
//or
console.log(student["sno"])//but not preferred
//iterate an object-for in loop-doesnt have index its ordered colection
//iterate an array-for of loop
for(let v in student){//it only gives key
    console.log(`${v} is ${student[v]}`)//student.v doesnt work
}
//array of objects
//let emps=[{},{},{}]
let emps=[
    {eno:1,name:"teddy"},
    {eno:2,name:"akki"},
    {eno:3,name:"something"},
]
// for(let v of emps){
//     for(let i in v){
//     console.log(`${i} is ${v[i]}`)
// }
// }
for(let v of emps){
    console.log(`eno is ${v.eno} and name is ${v.name}`)
}
let student1={
    rollNo:1,
    firstName:'teddy',
    lastName:'charvy',
    marks:[100,99,98],
    address:{
        city:"hyd",
        pincode:508255
    },
    average:function(){
        let sum=0;
        for(let v of this.marks){
            sum+=v;
        }
        return sum/marks.length;
    },
    getFullName:function(){
        return this.firstName+this.lastName;
    },//write within the object itself
};
console.log(student1.average());
//in is for object
//of is for the array