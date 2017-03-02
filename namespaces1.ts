namespace MyMath {
    export namespace Circle { // nested namespace, needs to be exported
        const PI = 3.14;

        export function calcCircumference(diameter: number) { // use 'export' to be available outside namespace
            return diameter * PI;
        }
    }
}