interface PersonData {
    firstName: string;
    age?: number; // added an 'optional' property // the object literal on line 34 doens't work without this
    [propName: string]: any; // unknown property and it's type

    greet(lastName: string): void;
};

// Interfaces vs Types
//   Same but interfaces offer more:
//   - An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
//   - An interface can have multiple merged declarations, but a type alias for an object type literal cannot.

function greet(person: PersonData) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: PersonData) {
    person.firstName = "Anna";
}

const person1: PersonData = {
    firstName: "Max", // if I chage here to 'name', it will break 'The Contract' for greet() and changeName()
    age: 27,

    greet(lastName: string) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
}
// #1
greet(person1); // here, person must have property 'firstName'
changeName(person1);
greet(person1);
person1.greet("Schwartzmuller");

const person2: PersonData = {
    firstName: "Raz", // I can remove age because it's option in the interface

    greet(lastName: string) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
}
// #2
greet(person2); // here, person must have property 'firstName'
person2.greet("Sarca");

// #3
// oject literal checked more strictly then object person1 (only works with age in interface)
// greet({ firstName: "Raul", age: 27 }); // does not work anymore due to intefaces' greet() method

const person3: PersonData = {
    firstName: "Mircea",
    hobbies: ["Cooking", "Sports"],

   greet(lastName: string) {
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    }
}

// #4
greet(person3);
person3.greet("Rogojan");

// Implementing the interface
console.log(">>> Implementing the interface with a class");

class Person implements PersonData {
    firstName: string;
    lastName: string; // new, not present in interface
    greet(lastName: string) {
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

interface StrictFunction {
    (number1: number, number2: number): number;
}
let myFunc: StrictFunction;
myFunc = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
}
console.log(myFunc(10,20));

// Interface inheritance
console.log(">>> Interface inheritance");

interface AgedPerson extends PersonData {
    age: number;
}
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Greg",
    greet(lastName: string) {
        console.log("Hello " + lastName);
    }
}
oldPerson.greet("Stinky");
console.log(oldPerson);

// JavaScript doesn't know interfaces, so in .js there will be no interfaces form .ts
