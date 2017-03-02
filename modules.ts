// Use modules to write medium to big applications //

// import { PI, calcCircumference } from "./math/circle";
import * as Circle from "./math/circle";
import { calcRectagle } from "./math/rectangle";
import trap from "./math/rectangle";

// console.log(PI);
console.log(Circle.PI);
// console.log(calcCircumference(5));
console.log(Circle.calcCircumference(5)); // use the alias
console.log(calcRectagle(5,2));

console.log("Default import (trapez):", trap(5,6));
