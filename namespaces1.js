"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
//# sourceMappingURL=namespaces1.js.map