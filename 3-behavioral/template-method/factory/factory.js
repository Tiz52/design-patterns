"use strict";
exports.__esModule = true;
exports.OrderFactory = void 0;
var order_type_1 = require("./order-type");
var store_order_1 = require("../concrete/store-order");
var web_order_1 = require("../concrete/web-order");
var OrderFactory = /** @class */ (function () {
    function OrderFactory() {
    }
    // Factory Method
    OrderFactory.getConcreteOrder = function (orderType) {
        if (orderType == order_type_1.OrderType.STORE)
            return new store_order_1.StoreOrder();
        if (orderType == order_type_1.OrderType.WEB)
            return new web_order_1.WebOrder();
        return new store_order_1.StoreOrder();
    };
    return OrderFactory;
}());
exports.OrderFactory = OrderFactory;
