// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
"use strict";
class MyMap {
    constructor() {
        this._pair = new Map();
    }
    // setItem(key: string, item: T) // should create a new key-value pair
    setItem(key, item) {
        this._pair.set(key, item);
    }
    // getItem(key: string) // should retrieve the value of the provided key
    getItem(key) {
        return this._pair.get(key);
    }
    // remove a key-value pair
    delete(key) {
        this._pair.delete(key);
    }
    // clear() // should remove all key-value pairs
    clear() {
        // this._pair.entries() .forEach( function(key) {
        //     this._pair.delete(key);
        // });
    }
    // printMap() // should output key-value pairs
    printMap() {
        this._pair.forEach(function (element, key, map) {
            console.log(element); // prints value
            console.log(key); // prints key
            console.log(map); // prints entire map
        });
    }
}
// The map should be usable like shown below:
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('apples', 6); // error on new push?
console.log("Number of apples: ", numberMap.getItem('apples'));
console.log("removing apples");
numberMap.clear;
numberMap.setItem('bananas', 10);
console.log("Number of bananas: ", numberMap.getItem('bananas'));
numberMap.setItem('cramberries', 25);
console.log("Number of cramberries: ", numberMap.getItem('cramberries'));
numberMap.printMap();
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// console.log(stringMap.getItem('name'));
// stringMap.setItem('age', "27");
// console.log(stringMap.getItem('age'));
// console.log(numberMap.printMap());
//# sourceMappingURL=generics-exercise.js.map