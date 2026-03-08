//optonal chaining and nullish coalescing
//accessing properties one after the other is chaining
//telling exactly that the property is missing-nullish coalscing
let person={
    name1:"teddy"
}
console.log(person.name1)
console.log(person.marks?.length??"marks field not available");//?? at the end of the property statement