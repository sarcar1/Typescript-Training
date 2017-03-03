// A decorator is just a function, a normal function
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
let Personal = class Personal {
    constructor() {
        console.log("Hi!");
    }
};
Personal = __decorate([
    logged // this decorator takes class constructor function as parameter
], Personal);
// Factory
function logging(value) {
    return value ? logged : null;
}
let Car = class Car {
};
Car = __decorate([
    logging(true) // why? - because of "strictNullChecks": true
], Car);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = class Plant {
    constructor() {
        this.name = "Green Plant";
    }
};
Plant = __decorate([
    logging(true) // can use multiple decorators
    ,
    printable
], Plant);
const plant = new Plant();
plant.print();
// Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Property decorator
function overwriteable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
class Project {
    constructor(name) {
        this.name = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwriteable(false)
], Project.prototype, "name", void 0);
__decorate([
    editable(false) // this will not allow to change the function (like bellow to 2000)
], Project.prototype, "calcBudget", null);
const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
//# sourceMappingURL=decorators.js.map