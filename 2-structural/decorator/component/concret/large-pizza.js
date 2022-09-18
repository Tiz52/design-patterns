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
exports.LargePizza = void 0;
var pizza_1 = require("../abstract/pizza");
var LargePizza = /** @class */ (function (_super) {
    __extends(LargePizza, _super);
    function LargePizza() {
        var _this = _super.call(this) || this;
        _this.description = "Large Pizza (9.00)";
        return _this;
    }
    LargePizza.prototype.getDescription = function () {
        return this.description;
    };
    LargePizza.prototype.calculateCost = function () {
        return 9.00;
    };
    return LargePizza;
}(pizza_1.Pizza));
exports.LargePizza = LargePizza;
