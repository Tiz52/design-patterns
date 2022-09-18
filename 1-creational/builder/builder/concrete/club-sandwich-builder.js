"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ClubSandwichBuilder = void 0;
var sandwich_builder_1 = require("../abstract/sandwich-builder");
var bread_type_1 = require("../../enums/bread-type");
var cheese_type_1 = require("../../enums/cheese-type");
var meat_type_1 = require("../../enums/meat-type");
// Club Sandwich Representation
var ClubSandwichBuilder = /** @class */ (function (_super) {
    __extends(ClubSandwichBuilder, _super);
    function ClubSandwichBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClubSandwichBuilder.prototype.prepareBread = function () {
        this.sandwich.setBreadType(bread_type_1.BreadType.WHITE);
        this.sandwich.setToasted(true);
    };
    ClubSandwichBuilder.prototype.applyMeatAndCheese = function () {
        this.sandwich.setMeatType(meat_type_1.MeatType.TURKEY);
        this.sandwich.setCheeseType(cheese_type_1.CheeseType.SWISS);
    };
    ClubSandwichBuilder.prototype.applyVegetables = function () {
        this.sandwich.setVegetables(["Tomato", "Onion", "Lettuce"]);
    };
    ClubSandwichBuilder.prototype.addCondiments = function () {
        this.sandwich.setHasMayonnaise(true);
        this.sandwich.setHasMustard(true);
    };
    return ClubSandwichBuilder;
}(sandwich_builder_1.SandwichBuilder));
exports.ClubSandwichBuilder = ClubSandwichBuilder;
