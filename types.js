"use strict";
// strings
var myName = 'Max';
// or // let myName: string = 'Max'; // this is infered automatically by typescript
// doesn't work // myName = 28;
// number
var myAge = 36;
// or // let myAge: number = 36; // this is infered automatically by typescript
// doesn't work // myAge = 'Raz';
//bolean
var hasHobbies = true;
// or // let hasHobbies: boolean = true; // this is infered automatically by typescript
// doesn't work // hasHobbies = 1;
// assign types works: back in JavaScript word where we don't know which type this has
var myRealAge;
// or // let myRealAge: number; // in this case we cannot assign '27' to it
myRealAge = 27;
myRealAge = '27';
// array
// let hobbies = ["Cooking","Sports"];
// console.log(typeof hobbies); // this will show in console: object 
// hobbies = [100]; // this doesn't work because hobbies is already an array of strings
var hobbies = ["Cooking", "Sports"];
// but it will work if I use "any"
hobbies = [100];
// tupples
var address1 = ["Superstreet", 99]; // this is considered an array of type any[]
var address2 = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log("myColor Red should be 3, and is =", myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("hello!");
    //return myAge; // this should not return anything (void)
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 'Max')); // this returns a special type of number called NaN (not a number)
function multiply2(value1, value2) {
    return value1 * value2;
}
console.log("multiply 2*10=", multiply2(2, 10)); // now we are obligated to multiply a number
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply(); // this returns the return of the sayHello
console.log("myMultiply():", myMultiply()); // this returns void
console.log("myMultiply():", myMultiply); // this returns the function code
// myMultiply = sayHello(); // this assigns myMultiply to the return of sayHello() function
myMultiply = multiply2;
// console.log(multiply2(2, "5")); // obligated to use 5 not "5"
console.log("2 * 5 =", myMultiply(2, 5));
var myMultiply2;
// myMultiply2 = sayHello; // this doesn't work because now the function is obligated to have the set type 
myMultiply2 = multiply2;
// object
var userData = {
    name: "raz",
    age: 37
};
// userData = {}; // this does not work because the oject is now a type, and has to have name and age
//userData = {    // this does not work because the oject is now a type, and has to have name and age
//    a = "raz",
//    b = 20
//};
var userData2 = {
    name: "raz",
    age: 37
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function uselessName(all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function uselessName(all) {
        return this.data;
    }
};
// union types
var myRealRealName = 27;
myRealRealName = "27"; // no error here because it's either a number or a string
// myRealRealName = true; // this doens't work because it's not a number or a string
// check types
var finalvalue = "A string";
if (typeof finalvalue == "number") {
    console.log("is a number");
}
else if (typeof finalvalue == "string") {
    console.log("actually it's a string");
}
// never type
// - must have unreachable end point
// - always throws an exception or one that never returns
function neverReturns() {
    throw new Error('Im an error');
    // return "I'm never here?"; // this cannot return something
}
console.log(neverReturns());
// nullable types
var canBeNull = 12;
// canBeNull = null; // does not work because we assgined a compiler option 'strictNullChecks' to true
var canBeNull2; // this is now type 'undefined'
canBeNull2 = null; // this works because canBeNull2 was not a defined type, it was undefined
var canBeNull3 = 12;
canBeNull3 = null; // this works because of union types
var canThisBeAny = null;
//canThisBeAny = 12; // this doesn't work because it's type is allways null, it's not inffered to 'any'
var canThisBeAny2 = null;
canThisBeAny2 = 12;
//# sourceMappingURL=app.js.map