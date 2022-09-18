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
exports.MediumPizza = void 0;
var pizza_1 = require("../abstract/pizza");
var MediumPizza = /** @class */ (function (_super) {
    __extends(MediumPizza, _super);
    function MediumPizza() {
        var _this = _super.call(this) || this;
        _this.description = "Medium Pizza (6.00)";
        return _this;
    }
    MediumPizza.prototype.getDescription = function () {
        return this.description;
    };
    MediumPizza.prototype.calculateCost = function () {
        return 6.00;
    };
    return MediumPizza;
}(pizza_1.Pizza));
exports.MediumPizza = MediumPizza;
