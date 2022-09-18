"use strict";
exports.__esModule = true;
exports.Client = void 0;
var context_1 = require("./context/context");
var factory_1 = require("./factory/factory");
var shipping_type_1 = require("./factory/shipping-type");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var strategy = factory_1.ShippingFactory.getConcreteStrategy(shipping_type_1.ShippingType.OlvaCourier);
        var context = new context_1.Context(strategy);
        console.log(context.calculateCost('data'));
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
