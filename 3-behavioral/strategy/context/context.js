"use strict";
exports.__esModule = true;
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.calculateCost = function (data) {
        return this.strategy.calculateCost(data);
    };
    return Context;
}());
exports.Context = Context;
