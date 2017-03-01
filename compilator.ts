let myName1: string = "max";
let myAge1: number = 27;
//myName1 = 27;

// test noImplicitAny compilator option
let anythingVar; // does not work here, why?
anythingVar = 12;

function controlMe( isTrue: boolean, somethingElse: boolean ) {
    //let result: number; // 'strictNullChecks' compilator option
    let result: number = 0;
    if ( isTrue ) {
        result = 12;
    }
    somethingElse = true; // 'noUnusedParameters' compilator option
    return result;
}
