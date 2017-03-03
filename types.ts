// strings
let myName = 'Max';
// or // let myName: string = 'Max'; // this is infered automatically by typescript
// doesn't work // myName = 28;

// number
let myAge = 36;
// or // let myAge: number = 36; // this is infered automatically by typescript
// doesn't work // myAge = 'Raz';

// bolean
let hasHobbies = true;
// or // let hasHobbies: boolean = true; // this is infered automatically by typescript
// doesn't work // hasHobbies = 1;

// assign types works: back in JavaScript word where we don't know which type this has
let myRealAge;
// or // let myRealAge: number; // in this case we cannot assign '27' to it
myRealAge = 27;
myRealAge = '27';

// array
// let hobbies = ["Cooking","Sports"];
// console.log(typeof hobbies); // this will show in console: object 
// hobbies = [100]; // this doesn't work because hobbies is already an array of strings
let hobbies: any[] = ["Cooking","Sports"];
// but it will work if I use "any"
hobbies = [100];

// tupples
let address1 = ["Superstreet", 99] // this is considered an array of type any[]
let address2: [string, number] = ["Superstreet", 99]

// enum
enum Color {
    Blue, // 0
    Green = 100, // 1
    Yellow = 2, // 2
    Red
}
let myColor: Color = Color.Red;
console.log("myColor Red should be 3, and is =", myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("hello!");
    //return myAge; // this should not return anything (void)
}
sayHello();

// argument types
function multiply(value1, value2): number {
    return value1 * value2;
}
console.log(multiply(2, 'Max')); // this returns a special type of number called NaN (not a number)

function multiply2(value1: number, value2: number): number {
    return value1 * value2;
}
console.log("multiply 2*10=", multiply2(2, 10)); // now we are obligated to multiply a number

// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();                               // this returns the return of the sayHello
console.log("myMultiply():", myMultiply()); // this returns void
console.log("myMultiply():", myMultiply);   // this returns the function code
// myMultiply = sayHello(); // this assigns myMultiply to the return of sayHello() function
myMultiply = multiply2;
// console.log(multiply2(2, "5")); // obligated to use 5 not "5"
console.log("2 * 5 =", myMultiply(2, 5));

let myMultiply2: (a: number, b: number) => number;
// myMultiply2 = sayHello; // this doesn't work because now the function is obligated to have the set type 
myMultiply2 = multiply2;

// object
let userData = {
    name: "raz",
    age: 37
};
// userData = {}; // this does not work because the oject is now a type, and has to have name and age
//userData = {    // this does not work because the oject is now a type, and has to have name and age
//    a = "raz",
//    b = 20
//};
let userData2: { name: string, age: number } = { // here we have PROPERTIES of objects and their types
    name: "raz",
    age: 37
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function uselessName( all: boolean ): number[] {
        return this.data;
    }
};
// complex = {}; // does not work because of object type

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function uselessName( all: boolean ): number[] {
        return this.data;
    }
};

// union types
let myRealRealName: number | string = 27;
myRealRealName = "27"; // no error here because it's either a number or a string
// myRealRealName = true; // this doens't work because it's not a number or a string

// check types
let finalvalue = "A string";
if ( typeof finalvalue == "number" ) {
    console.log("is a number");
}
else if ( typeof finalvalue == "string" ) {
    console.log("actually it's a string");
}

// never type
// - must have unreachable end point
// - always throws an exception or one that never returns
function neverReturns(): never {
    throw new Error('Im an error');
    // return "I'm never here?"; // this cannot return something
}
console.log(neverReturns());

// nullable types
let canBeNull = 12;
// canBeNull = null; // does not work because we assgined a compiler option 'strictNullChecks' to true
let canBeNull2; // this is now type 'undefined'
canBeNull2 = null; // this works because canBeNull2 was not a defined type, it was undefined
let canBeNull3: number | null = 12;
canBeNull3 = null; // this works because of union types
let canThisBeAny = null;
//canThisBeAny = 12; // this doesn't work because it's type is allways null, it's not inffered to 'any'
let canThisBeAny2: any = null;
canThisBeAny2 = 12;

