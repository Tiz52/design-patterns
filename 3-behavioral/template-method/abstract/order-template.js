"use strict";
exports.__esModule = true;
exports.OrderTemplate = void 0;
var OrderTemplate = /** @class */ (function () {
    function OrderTemplate() {
    }
    // Template Method
    OrderTemplate.prototype.processOrder = function () {
        this.doCheckout();
        this.doPayment();
        if (this.isGift) {
            this.wrapGift();
        }
        else {
            this.doReceipt();
        }
        this.doDelivery();
    };
    OrderTemplate.prototype.wrapGift = function () {
        console.log("Gift wrapped.");
    };
    return OrderTemplate;
}());
exports.OrderTemplate = OrderTemplate;
