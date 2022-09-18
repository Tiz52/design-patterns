"use strict";
exports.__esModule = true;
exports.SandwichBuilder = void 0;
var sandwich_1 = require("../../product/sandwich");
// Builder Abstracto
var SandwichBuilder = /** @class */ (function () {
    function SandwichBuilder() {
    }
    SandwichBuilder.prototype.getSandwich = function () {
        return this.sandwich;
    };
    SandwichBuilder.prototype.createNewSandwich = function () {
        this.sandwich = new sandwich_1.Sandwich();
    };
    return SandwichBuilder;
}());
exports.SandwichBuilder = SandwichBuilder;
