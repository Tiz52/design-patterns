"use strict";
exports.__esModule = true;
exports.Client = void 0;
var factory_1 = require("./factory/factory");
var order_type_1 = require("./factory/order-type");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var order = factory_1.OrderFactory.getConcreteOrder(order_type_1.OrderType.STORE);
        order.processOrder();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
