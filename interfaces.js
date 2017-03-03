"use strict";
;
// Interfaces vs Types
//   Same but interfaces offer more:
//   - An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
//   - An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
const person1 = {
    firstName: "Max",
    age: 27,
    greet(lastName) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
};
// #1
greet(person1); // here, person must have property 'firstName'
changeName(person1);
greet(person1);
person1.greet("Schwartzmuller");
const person2 = {
    firstName: "Raz",
    greet(lastName) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
};
// #2
greet(person2); // here, person must have property 'firstName'
person2.greet("Sarca");
// #3
// oject literal checked more strictly then object person1 (only works with age in interface)
// greet({ firstName: "Raul", age: 27 }); // does not work anymore due to intefaces' greet() method
const person3 = {
    firstName: "Mircea",
    hobbies: ["Cooking", "Sports"],
    greet(lastName) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
};
// #4
greet(person3);
person3.greet("Rogojan");
// Implementing the interface
console.log(">>> Implementing the interface with a class");
class Person {
    greet(lastName) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
}
const myPerson = new Person;
myPerson.firstName = "Sofia";
myPerson.lastName = "Sarca";
greet(myPerson); // here calling the function that expect "PersonData" interface, not Person class
myPerson.greet(myPerson.lastName);
// Function types
console.log(">>> Function types");
let myFunc;
myFunc = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myFunc(10, 20));
// Interface inheritance
console.log(">>> Interface inheritance");
const oldPerson = {
    age: 27,
    firstName: "Greg",
    greet(lastName) {
        console.log("Hello " + lastName);
    }
};
oldPerson.greet("Stinky");
console.log(oldPerson);
// JavaScript doesn't know interfaces, so in .js there will be no interfaces form .ts
//# sourceMappingURL=interfaces.js.map