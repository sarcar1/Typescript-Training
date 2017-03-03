"use strict";
var generics_exercise_max;
(function (generics_exercise_max) {
    class MyMap {
        constructor() {
            this.map = {};
        }
        setItem(key, item) {
            this.map[key] = item;
        }
        getItem(key) {
            return this.map[key];
        }
        clear() {
            this.map = {};
        }
        printMap() {
            for (let key in this.map) {
                console.log(key, this.map[key]);
            }
        }
    }
    // Using it
    const numberMap = new MyMap();
    numberMap.setItem("apples", 10);
    numberMap.setItem("bananas", 2);
    console.log(numberMap.getItem("apples"));
    numberMap.printMap();
    numberMap.clear();
    numberMap.printMap();
    const stringMap = new MyMap();
    stringMap.setItem("apples", "10");
    stringMap.setItem("bananas", "2");
    console.log(stringMap.getItem("apples"));
    stringMap.printMap();
    stringMap.clear();
    stringMap.printMap();
})(generics_exercise_max || (generics_exercise_max = {})); // end namespace generics_exercise_max
//# sourceMappingURL=generics-exercise-max.js.map