"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log(">>> Classes");
var Person = (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 37;
        this.name = name;
        // For username, the constructor does 3 things
        // 1. creates a data member called 'userName'
        // 2. it allows usage in constructor params
        // 3. it does 'this.userName = userName;' in the constructor
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
        console.log(this.type);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var pers = new Person("Person", "pax");
console.log(pers);
console.log(pers.name, pers.userName);
pers.printAge();
console.log(">>> Inheritance");
var Razvan = (function (_super) {
    __extends(Razvan, _super);
    function Razvan(username) {
        var _this = _super.call(this, "Adina", username) || this;
        _this.age = 35; // 'this' can only be called after 'super'
        return _this;
    }
    return Razvan;
}(Person));
var adina = new Razvan("sarcaa");
console.log(adina);
console.log(">>> Getters & Setters");
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = "Green Plant";
            }
            else {
                this._species = "You probably entered a wrong value";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant1 = new Plant();
console.log(plant1.species); // this gets the default _species
plant1.species = "Red";
console.log(plant1.species); // this is less then 3
plant1.species = "Red flower";
console.log(plant1.species); //  this is more the 3
console.log(">>> Static Properties & Methods");
var Helper = (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Helper;
}());
Helper.PI = 3.14159;
console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(8));
console.log(">>> Abstract Classes");
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function (adjustment) {
        return this.budget * adjustment;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject;
console.log(myProject);
myProject.changeName("Super IT Project");
console.log(myProject);
console.log(">>> Singletons. Private Constructors");
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one!');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('Test'); // this works because it gets compiled into javascript, and there there is no 'private'
console.log(wrong);
var right = OnlyOne.getInstance(); // 'The only one!'
console.log(right);
var right2 = OnlyOne.getInstance(); // 'The only one!'
console.log(right2);
right2.name = 'Something else'; // this works because it gets compiled into javascript, and there there is no 'readonly'
console.log(right2);
//# sourceMappingURL=classes.js.map