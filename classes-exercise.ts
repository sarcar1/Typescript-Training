// Exercise 1
console.log("Module Classes: Excerise 1");

class Car {
    public acceleration: number = 0;

    constructor( public name: string ) {}

    public honk = () => {
        console.log("Toooooooooot!");
    }

    public accelerate = (speed: number) => {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
console.log("Module Classes: Excerise 2");
class baseObject {
    private _width: number = 0;
    private _length: number = 0;

    set width(value: number) {
        this._width = value;
    }
    set length(value: number) {
        this._length = value;
    }
    public calcSize = () => this._width * this._length;
};
let rectangle = new baseObject;
rectangle.width = 5;
rectangle.length = 2;
console.log("rectangle.calcSize():", rectangle.calcSize());


// Exercise 3
console.log("Module Classes: Excerise 3");
class Personaj {
    private _firstName: string = "empty";

    get firstName() {
        return this._firstName;
    };

    set firstName( value: string ) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "still empty";
        }
    };
};
let personaj = new Personaj;
console.log(personaj.firstName);
personaj.firstName = "Ma";
console.log(personaj.firstName);
personaj.firstName = "Maximilian";
console.log(personaj.firstName);
