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
exports.WebOrder = void 0;
var order_template_1 = require("../abstract/order-template");
var WebOrder = /** @class */ (function (_super) {
    __extends(WebOrder, _super);
    function WebOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebOrder.prototype.doCheckout = function () {
        console.log("WebOrder - Get items from cart,");
        console.log("WebOrder - Set gift preferences,");
        console.log("WebOrder - Set delivery address,");
        console.log("WebOrder - Set billing address.");
    };
    WebOrder.prototype.doPayment = function () {
        console.log("WebOrder - Process payment without Card present");
    };
    WebOrder.prototype.doDelivery = function () {
        console.log("WebOrder - Ship the item to address");
    };
    WebOrder.prototype.doReceipt = function () {
        console.log("WebOrder -Email receipt");
    };
    return WebOrder;
}(order_template_1.OrderTemplate));
exports.WebOrder = WebOrder;
