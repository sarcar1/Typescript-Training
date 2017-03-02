console.log(">>> Classes");

class Person {
    name: string; // public is iferred
    private type: string;
    protected age: number = 37;

    constructor( name: string, public userName: string ) {
        this.name = name;
        // For username, the constructor does 3 things
            // 1. creates a data member called 'userName'
            // 2. it allows usage in constructor params
            // 3. it does 'this.userName = userName;' in the constructor
    }

    printAge() {
        console.log(this.age);
        this.setType("Old guy");
        console.log(this.type);
    }

    private setType(type: string) {
        this.type = type;
    }
}

const pers = new Person("Person", "pax");
console.log(pers);
console.log(pers.name, pers.userName);
pers.printAge();

console.log(">>> Inheritance");

class Razvan extends Person { // extends the parent class or overrides things that are similar
    name: "Razvan";

    constructor( username: string ) {
        super("Adina", username); // super MUST be called when extending a class
        this.age = 35;            // 'this' can only be called after 'super'
    }
}
const adina = new Razvan("sarcaa");
console.log(adina);

console.log(">>> Getters & Setters");
class Plant {
    private _species: string = "Default";

    set species(value: string) { // This is NOT A FUNCTION - it sets a NEW data member called 'species' and it uses '(value: string)' to do it
        if ( value.length > 3 ) {
            this._species = "Green Plant";
        } else {
            this._species = "You probably entered a wrong value";
        }
    }

    get species() { // This is NOT A FUNCTION - it gets the NEW data member called 'species' and it uses '()' to do it
        return this._species;
    }
}
let plant1 = new Plant();
console.log(plant1.species); // this gets the default _species
plant1.species = "Red";
console.log(plant1.species); // this is less then 3
plant1.species = "Red flower";
console.log(plant1.species); //  this is more the 3

console.log(">>> Static Properties & Methods");
class Helper {
    static PI: number = 3.14159;
    static calcCircumference(diameter: number): number {
        return this.PI*diameter;
    }
}
console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(8));

console.log(">>> Abstract Classes");
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName( name: string ): void;

    calcBudget( adjustment: number ) {
        return this.budget * adjustment;
    }
}
class ITProject extends Project {
    changeName( name: string ): void {
        this.projectName = name;
    }
}
let myProject = new ITProject;
console.log(myProject);
myProject.changeName("Super IT Project");
console.log(myProject);

console.log(">>> Singletons. Private Constructors");
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) { // for a new test, adding 'readonly' here to not be able to change name, but still view it
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one!');
        }
        return OnlyOne.instance;
    }
}

let wrong = new OnlyOne('Test'); // this works because it gets compiled into javascript, and there there is no 'private'
console.log(wrong);
let right = OnlyOne.getInstance(); // 'The only one!'
console.log(right);
let right2 = OnlyOne.getInstance(); // 'The only one!'
console.log(right2);
right2.name = 'Something else'; // this works because it gets compiled into javascript, and there there is no 'readonly'
console.log(right2);

