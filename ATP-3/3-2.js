const students=[
    {id:1,name:"ravi",marks:78},
    {id:2,name:"deekshi",marks:92},
    {id:3,name:"tedddyy",marks:35},
    {id:4,name:"akki",marks:88},
    {id:5,name:"charvy",marks:40},
];
let result=students.filter(studentObj=>studentObj.marks>80)//aming convention inside the filter-studentObj write like this
console.log(result)
let sumOfMarks=students.reduce((acc,stdObj)=>acc+stdObj.marks,0)
console.log(`sum of marks is: ${sumOfMarks}`)

//let r1=students.map(stdObj.marks)//picks individual properties in the object
