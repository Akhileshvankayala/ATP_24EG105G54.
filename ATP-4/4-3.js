let a=100
let b=a;
//copy successfully made,but its not like that for the objects
let y={a:100}
let copyOfy=y;
y.a=5
console.log(y)
console.log(copyOfy)
//assignment operator is used to copy only for primitive types and fpr references we should use spread operator
//spread operator
   //create a copy
   let obj={a:100,b:120}
   let objCopy={...obj}
   obj.a=8
   console.log(obj)
   console.log(objCopy)
   //deep copy-using structuredClone
   let person={
    name:"akki",
    address:{
        no:55,
        city:"hyd"
    }
   }
   let personCopy=structuredClone(person)
   personCopy.address.city="bang"
   personCopy.name="akilesuu"
   console.log(person)
   console.log(personCopy)

   //add elements/properties while copying
   let arr=[1,2,3]
   let arrCopy=[...arr,4];
   console.log(arr)
   console.log(arrCopy)
   let o={a:10}
   let oCopy={...o,b:10}
   console.log(o)
   console.log(oCopy)
   //merge
   let arr1=[1,2,3]
   let arr2=[4,5,6]
   let arrMerged=[...arr1,...arr2]
   console.log(arrMerged)