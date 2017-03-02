console.log(">>> Let & const");

var var1 = "test"; // this is global scope // also, inferes string
let variable = "test"; // this is block scope
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // cannot reasign to constant

console.log(">>> Block scope");

function reset() {
    //console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

console.log(">>> Arrow functions");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Manu");
}
greet();

const greet2 = friend => console.log(friend);
greet2("Manu2");
const greet3 = (friend: string) => console.log(friend);
greet2("Manu2");

console.log(">>> Default parameters");
const countdown = (start: number = 10) => {
    console.log(start);
    while ( start > 0 ) {
        start--;
    }
    console.log("Done!", start);
}
countdown();
countdown(20);

console.log(">>> Rest & Spread");
const numbers = [-1, 5, 20, 24];
console.log(Math.max(33, 21, -1, 7));
console.log(Math.max(...numbers)); // this is spread

function makeArray( ...args: number[] ) { // this is rest // get a list, but that is actually an array
    return args;
}
console.log(makeArray(1, 2, 3));

console.log(">>> Destructuring arrays");
const myHobbies = ["Cooking", "Sports"];
const hobby1 = myHobbies[0];
const hobby2 =  myHobbies[1];
console.log(hobby1, hobby2);
const [hob1, hob2] = myHobbies; // this is destructuring arrays
console.log(hob1, hob2);

const userData = {userName: "Max", userAge: 27};
const {userName, userAge} = userData; // this is destructuring objects w/out changing names
console.log(userName, userAge);
const {userName: un, userAge: ua} = userData; // this is destructuring objects w/out changing names
console.log(un, ua);
// console.log(userName, userAge); // this will not work once you set an alias to the object params

console.log(">>> Template literals");
const userName2 = "Max";
const greeting = `This is a greeting!
Hello ${userName2}!
How are you?
`;
console.log(greeting);

console.log(">>>>>>>>>>>>>>>> Symbols, Iterators, Generators in ES6 course.");

