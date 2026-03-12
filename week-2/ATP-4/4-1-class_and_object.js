//class
//instance of a class is object
//class has logical existence
//physical existences-object-occupies space
//methods are not part of an object
//static data is not part of an object because it is applicable and common to all the objects and doesnt need an object to call them
//classes are not required to create a new object in javascript/es

//object literals
let test={
    hi:"teddy",
    methodn:function(){
        //this method can be accessed by methodn()
    }
}

class Student{
    //properties
    sno;//dont use let or const
    #name;
    email;
    //using # it becomes private variable
    //constructor-it is implicitly invoked and immediately once the object is created
    constructor(sno,name,email){
        //initialise the object
        this.sno=sno;
        this.#name=name;//we need to keep # here also to assign to private data
        this.email=email;
    }
    //methods
    getStudentInfo(){//doesnt have function keyword because it is a member of the class
        return [this.sno,this.name,this.email]
    }
    accessPrivate(){//instance method
        console.log(this.#name)
    }
    //static variabled and static methods
    static staticEx(){
        console.log("static method called")
    }
}
let s1=new Student(63,"teddy","62@gmail.com");
let s2=new Student(54,"akki","54@gmail.com");
console.log(s1.email)
console.log(s1.name)
s1.accessPrivate();
Student.staticEx();
//inheritance is "is a" relationship
//eg:student is a person
// class Person{}
// class Student extends Person{}


//we use composition so learning this is benificial than inheritance
// //composition is "has a" relationship
// //eg:car has a engine
// class Engine{}
// class Car{
//     Engine e;
// }

