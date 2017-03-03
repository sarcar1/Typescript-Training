"use strict";
// Simple Generic. Problem of not knowing the type
console.log(">>> Simple Generic");
function echo(data) {
    return data;
}
console.log(echo("Raz").lenght);
console.log(echo(36).length);
console.log(echo({ name: "Raz", age: 36 }.length));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Raz").length);
console.log(betterEcho(36));
console.log(betterEcho({ name: "Raz", age: 36 }));
// Built-in Generics (Arrays)
console.log(">>> Built-in Generics (Arrays)");
const testResults = [1.2, 4.5];
testResults.push(3.4);
console.log(testResults);
// Generic Array
console.log(">>> Generic Array");
function printAll(args) {
    args.forEach((element) => console.log(element));
}
printAll(["Apple", "Banana"]);
function printAll2(args) {
    args.forEach((element) => console.log(element));
}
printAll2(["Apple", "Banana"]);
// Generic Types
console.log(">>> Generic Functions");
// What is this?
// 1. echo2 is a constant function
// 2. between : and = is it's type, it's a generic type that is a function
// 3. this function gets a param 'data' of type T and returns something of type T
const echo2 = betterEcho;
console.log(betterEcho("something"));
// Generic Classes
console.log(">>> Generic Classes");
// if 'T extends U' not 'extends number | string' then if U is number then T has to be number
class SimpleMath {
    calcMultiply() {
        return +this.firstValue * +this.secondValue; // casting ('+' keyword) - it's cast to whatever compiler needs
    }
}
const simpleMath = new SimpleMath();
// simpleMath.firstValue = "string"; // this doesn't work if T extends number
simpleMath.firstValue = 10;
simpleMath.secondValue = 20;
console.log(simpleMath.calcMultiply());
const simpleMath2 = new SimpleMath(); // this doesn't work if T extends just number
simpleMath.firstValue = "10";
// simpleMath.firstValue = "text"; // this then returns NaN
simpleMath.secondValue = "20";
console.log(simpleMath.calcMultiply());
const simpleMath3 = new SimpleMath(); // this doesn't work if T extends just number
simpleMath.firstValue = "10";
// simpleMath.firstValue = "text"; // this then returns NaN
simpleMath.secondValue = 20;
console.log(simpleMath.calcMultiply());
//# sourceMappingURL=generics.js.map