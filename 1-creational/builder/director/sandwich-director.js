"use strict";
exports.__esModule = true;
exports.SandwichDirector = void 0;
var SandwichDirector = /** @class */ (function () {
    function SandwichDirector(builder) {
        this.builder = builder;
    }
    SandwichDirector.prototype.buildSandwich = function () {
        this.builder.createNewSandwich();
        // Parts
        this.builder.prepareBread();
        this.builder.applyMeatAndCheese();
        this.builder.applyVegetables();
        this.builder.addCondiments();
    };
    // get Product
    SandwichDirector.prototype.getSandwich = function () {
        return this.builder.getSandwich();
    };
    return SandwichDirector;
}());
exports.SandwichDirector = SandwichDirector;
