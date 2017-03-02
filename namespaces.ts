// Adding link (in order!) to files that has exports that are used here
/// <reference path="namespaces1.ts" />
/// <reference path="namespaces2.ts" />

import CircleMath = MyMath.Circle; // create an alias

// this global scope
const PI = 2.99;
console.log(PI); // PI is not the same PI as in MyMath namespace

console.log(MyMath.Circle.calcCircumference(5));
console.log(CircleMath.calcCircumference(5)); // use the alias
console.log(MyMath.calcRectagle(5,2));

