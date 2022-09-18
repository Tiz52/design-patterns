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
exports.Laptop = void 0;
var item_1 = require("../abstract/item");
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(id, price) {
        return _super.call(this, id, price) || this;
    }
    Laptop.prototype.accept = function (visitor) {
        visitor.visitLaptop(this);
    };
    return Laptop;
}(item_1.Item));
exports.Laptop = Laptop;
