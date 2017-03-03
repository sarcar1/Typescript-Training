// A decorator is just a function, a normal function

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged  // this decorator takes class constructor function as parameter
class Personal {
    constructor() {
        console.log("Hi!");
    }
}

// Factory
function logging(value: boolean) {
    return value? logged : null;
}

@logging(true) // why? - because of "strictNullChecks": true
class Car {
}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }   
}

@logging(true) // can use multiple decorators
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

// Method decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) { // "strictNullChecks": true
        descriptor.writable = value;
    }
}
// Property decorator
function overwriteable(value: boolean) {
    return function(target: any, propName: string): any { // "strictNullChecks": true
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}
class Project {
    @overwriteable(false)
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @editable(false) // this will not allow to change the function (like bellow to 2000)
    calcBudget() {
        console.log(1000);
    }
}
const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() { // Overriding here // now this change will not happen because of @editable
    console.log(2000);
}
project.calcBudget();
console.log(project);