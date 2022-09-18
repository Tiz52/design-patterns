"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(id, price) {
        this.id = id;
        this.price = price;
    }
    Item.prototype.getDiscount = function (percentage) {
        return this.price * percentage;
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    return Item;
}());
exports.Item = Item;
