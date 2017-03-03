// Use modules to write medium to big applications //
"use strict";
// import { PI, calcCircumference } from "./math/circle";
const Circle = require("./math/circle");
const rectangle_1 = require("./math/rectangle");
const rectangle_2 = require("./math/rectangle");
// console.log(PI);
console.log(Circle.PI);
// console.log(calcCircumference(5));
console.log(Circle.calcCircumference(5)); // use the alias
console.log(rectangle_1.calcRectagle(5, 2));
console.log("Default import (trapez):", rectangle_2.default(5, 6));
//# sourceMappingURL=modules.js.map