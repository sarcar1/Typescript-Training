"use strict";
// Exercise 1
console.log("Module Classes: Excerise 1");
var Car = (function () {
    function Car(name) {
        var _this = this;
        this.name = name;
        this.acceleration = 0;
        this.honk = function () {
            console.log("Toooooooooot!");
        };
        this.accelerate = function (speed) {
            _this.acceleration = _this.acceleration + speed;
        };
    }
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
console.log("Module Classes: Excerise 2");
var baseObject = (function () {
    function baseObject() {
        var _this = this;
        this._width = 0;
        this._length = 0;
        this.calcSize = function () { return _this._width * _this._length; };
    }
    Object.defineProperty(baseObject.prototype, "width", {
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(baseObject.prototype, "length", {
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    return baseObject;
}());
;
var rectangle = new baseObject;
rectangle.width = 5;
rectangle.length = 2;
console.log("rectangle.calcSize():", rectangle.calcSize());
// Exercise 3
console.log("Module Classes: Excerise 3");
var Personaj = (function () {
    function Personaj() {
        this._firstName = "empty";
    }
    Object.defineProperty(Personaj.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "still empty";
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Personaj;
}());
;
var personaj = new Personaj;
console.log(personaj.firstName);
personaj.firstName = "Ma";
console.log(personaj.firstName);
personaj.firstName = "Maximilian";
console.log(personaj.firstName);
//# sourceMappingURL=exercises3.js.map