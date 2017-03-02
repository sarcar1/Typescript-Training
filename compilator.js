"use strict";
var myName1 = "max";
var myAge1 = 27;
//myName1 = 27;
// test noImplicitAny compilator option
var anythingVar; // does not work here, why?
anythingVar = 12;
function controlMe(isTrue, somethingElse) {
    //let result: number; // 'strictNullChecks' compilator option
    var result = 0;
    if (isTrue) {
        result = 12;
    }
    somethingElse = true; // 'noUnusedParameters' compilator option
    return result;
}
//# sourceMappingURL=compilator.js.map