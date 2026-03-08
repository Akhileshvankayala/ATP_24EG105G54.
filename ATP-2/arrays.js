let testArray=[1,2,3]

//dynamic insertion
//end
testArray.push("teddy")
//what method to use,what parameters it tales and what it returns
console.log(testArray);
//start
testArray.unshift("akki")
console.log(testArray);
//in between
testArray.splice(1,0,"teddyluuu")
console.log(testArray);

//dynamic deletion(they can also add,delete elements of other datatypes in )
testArray.shift()//removes atmost 1 element
console.log(testArray);
testArray.pop();//removes atmost 1 elemen
console.log(testArray);
testArray.splice(2,1)//cam remove many elements
console.log(testArray);

//dynamic updation
testArray.splice();
//these methods (unshift,splice,....) affect the original array