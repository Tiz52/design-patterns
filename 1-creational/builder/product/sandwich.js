"use strict";
exports.__esModule = true;
exports.Sandwich = void 0;
// Product
var Sandwich = /** @class */ (function () {
    function Sandwich() {
    }
    Sandwich.prototype.setBreadType = function (breadType) {
        this.breadType = breadType;
    };
    Sandwich.prototype.setCheeseType = function (cheeseType) {
        this.cheeseType = cheeseType;
    };
    Sandwich.prototype.setMeatType = function (meatType) {
        this.meatType = meatType;
    };
    Sandwich.prototype.setToasted = function (isToasted) {
        this.isToasted = isToasted;
    };
    Sandwich.prototype.setHasMustard = function (hasMustard) {
        this.hasMustard = hasMustard;
    };
    Sandwich.prototype.setHasMayonnaise = function (hasMayonnaise) {
        this.hasMayonnaise = hasMayonnaise;
    };
    Sandwich.prototype.setVegetables = function (vegetables) {
        this.vegetables = vegetables;
    };
    Sandwich.prototype.display = function () {
        console.log("Sandwich on %s bread", this.breadType);
        if (this.isToasted) {
            console.log("Toasted");
        }
        if (this.hasMayonnaise) {
            console.log("With Mayonnaise");
        }
        if (this.hasMustard) {
            console.log("With Mustard");
        }
        console.log("Meat: %s", this.meatType);
        console.log("Cheese: %s", this.cheeseType);
        console.log("Veggies:");
        for (var index in this.vegetables) {
            console.log("   %s", this.vegetables[index]);
        }
        console.log("******************************");
    };
    return Sandwich;
}());
exports.Sandwich = Sandwich;
