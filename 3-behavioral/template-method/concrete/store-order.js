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
exports.StoreOrder = void 0;
var order_template_1 = require("../abstract/order-template");
var StoreOrder = /** @class */ (function (_super) {
    __extends(StoreOrder, _super);
    function StoreOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoreOrder.prototype.doCheckout = function () {
        console.log("StoreOrder - Ring up items from cart.");
    };
    StoreOrder.prototype.doPayment = function () {
        console.log("StoreOrder - Process payment with Card present");
    };
    StoreOrder.prototype.doDelivery = function () {
        console.log("StoreOrder - Bag items at counter");
    };
    StoreOrder.prototype.doReceipt = function () {
        console.log("StoreOrder - Print receipt");
    };
    return StoreOrder;
}(order_template_1.OrderTemplate));
exports.StoreOrder = StoreOrder;
