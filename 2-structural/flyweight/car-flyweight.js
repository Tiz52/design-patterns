"use strict";
exports.__esModule = true;
exports.CarFlyweight = void 0;
var CarFlyweight = /** @class */ (function () {
    function CarFlyweight(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    CarFlyweight.prototype.operation = function (extrinsicState) {
        var sharedState = JSON.stringify(this.intrinsicState); //intrinsic
        var uniqueState = JSON.stringify(extrinsicState); //extrinsic
        console.log("*** Flyweight: Displaying shared (".concat(sharedState, ") and unique (").concat(uniqueState, ") state."));
    };
    return CarFlyweight;
}());
exports.CarFlyweight = CarFlyweight;
