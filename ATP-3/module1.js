export let data=[1,2,3,4,63]
//exporting content to module2
//default export
export let person={
    pid:63,pname:"teddy"
}
//export default {data,person}//exports as an object containg 2 properties

//named export
//it supports multiple name exports but only one default export(if there are more,you have to pack them into one object)
//or export named exports together like below
//export {data,person}
//exports must be one way there must not be any circular type
