let person={
    name1: "akki",
    age:19,
    name2:"teddy",
    age:19
}
//add new property
person.city1="hyd"
person.city2="nlg"
person.deleteprop="dummy"
console.log(person)
//update a property
person.city2="chandur"
console.log(person)
//delete a property
delete person.deleteprop
console.log(person)
/*
function which can be sent as an argument for another function-call back function
filter(callback function)
map(callback function)
forEach(callback function)
reduce(callback function,initial value)
find(callback function)
findIndex(callback function)
sort(callback function) or toSorted(callback function)
reverse(callback function) or toReverse(callback function)
let result=method(callback function)......metghod calls the callback function and the callback function returns the value to the method
these methods create always create new arrays, doesnt modify the original array
*/
//filter-for selecting 
let testData=[3,-5,3,77,34,2,98,7,63]
// let filterex= testData.filter(function(element){
//     return element>30
// })
let filterEx= testData.filter((element)=>element>30)//arrow function doesnt need return keyword,as it automatically adds return keyword when braces are removed,,,but if braces are removed we need to add return keyword
console.log(filterEx)
//get elements between 40 and 80
let result= testData.filter((element)=>element>40 && element<80)//in filter((element,index)),first argument takes each value in testData and 2nd argument takes the index of that element
console.log(result)
//map-modify the data
let r2=testData.map((element)=>element+10)
console.log(r2)
//add 10 for the elements <50 and subtract 20 from elements >50
let r3=testData.map((element)=>{
    if(element<50){
        return element+10
    }
    else{
        return element-20
    }
})
console.log(r3)
//reduce
let r4=testData.reduce((accumulator,element)=>accumulator+element)
//                         3         -5             -2
//                         -2         3              1
//                          1         77             78 and so on
//last iteration            last 
//                  accumulated value   -              
console.log(r4)
//find small
let r5=testData.reduce((accumulator,element)=>{
    if(accumulator<element){
        return accumulator
    }
    else{
        return element;
    }
})
console.log(r5)
//find big
let r6=testData.reduce((accumulator,element)=>{//(accumulator,element)=>accumulator>element?acc:element
    if(accumulator<element){
        return accumulator
    }
    else{
        return element;
    }
})
console.log(r6)
//find
let r7=testData.find(element=>element===63)//returns undefined if element doesnt exist
console.log(r7)
//findIndex
let r8=testData.findIndex(element=>element===63)//returns -1 if element doesnt exist,because there is no -1 index
console.log(r8)
//sort()
//let r9=testData.sort()//lexical order check(bit wise comparision)
let data=[9,10,8,4]
let r9=data.sort((a,b)=>a-b)//ascending is this but for descending write b-a
console.log(r9)//sort modifies the original array too
console.log(data)
//to sorted creates new array and doesnt modify the original array
let r10=data.toReversed()
console.log(r10)
//reverse