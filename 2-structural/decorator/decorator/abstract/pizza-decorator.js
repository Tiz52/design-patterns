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
exports.PizzaDecorator = void 0;
var pizza_1 = require("../../component/abstract/pizza");
var PizzaDecorator = /** @class */ (function (_super) {
    __extends(PizzaDecorator, _super);
    function PizzaDecorator(pizza) {
        var _this = _super.call(this) || this;
        _this.pizza = pizza;
        return _this;
    }
    PizzaDecorator.prototype.getDescription = function () {
        return this.pizza.getDescription();
    };
    PizzaDecorator.prototype.calculateCost = function () {
        return this.pizza.calculateCost();
    };
    return PizzaDecorator;
}(pizza_1.Pizza));
exports.PizzaDecorator = PizzaDecorator;
