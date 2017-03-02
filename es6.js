"use strict";
console.log(">>> Let & const");
var var1 = "test"; // this is global scope // also, inferes string
var variable = "test"; // this is block scope
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // cannot reasign to constant
console.log(">>> Block scope");
function reset() {
    //console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log(">>> Arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Manu");
};
greet();
var greet2 = function (friend) { return console.log(friend); };
greet2("Manu2");
var greet3 = function (friend) { return console.log(friend); };
greet2("Manu2");
console.log(">>> Default parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
countdown(20);
console.log(">>> Rest & Spread");
var numbers = [-1, 5, 20, 24];
console.log(Math.max(33, 21, -1, 7));
console.log(Math.max.apply(Math, numbers)); // this is spread
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
console.log(">>> Destructuring arrays");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var hob1 = myHobbies[0], hob2 = myHobbies[1]; // this is destructuring arrays
console.log(hob1, hob2);
var userData = { userName: "Max", userAge: 27 };
var userName = userData.userName, userAge = userData.userAge; // this is destructuring objects w/out changing names
console.log(userName, userAge);
var un = userData.userName, ua = userData.userAge; // this is destructuring objects w/out changing names
console.log(un, ua);
// console.log(userName, userAge); // this will not work once you set an alias to the object params
console.log(">>> Template literals");
var userName2 = "Max";
var greeting = "This is a greeting!\nHello " + userName2 + "!\nHow are you?\n";
console.log(greeting);
//# sourceMappingURL=es6.js.map