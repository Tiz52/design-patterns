"use strict";
exports.__esModule = true;
exports.WordsAggregate = void 0;
var reverse_order_iterator_1 = require("./reverse-order-iterator");
var straight_order_iterator_1 = require("./straight-order-iterator");
var WordsAggregate = /** @class */ (function () {
    function WordsAggregate() {
        this.items = [];
    }
    WordsAggregate.prototype.createIterator = function () {
        return new straight_order_iterator_1.StraightOrderIterator(this);
    };
    WordsAggregate.prototype.createReverseIterator = function () {
        return new reverse_order_iterator_1.ReverseOrderIterator(this);
    };
    WordsAggregate.prototype.getItems = function () {
        return this.items;
    };
    WordsAggregate.prototype.getCount = function () {
        return this.items.length;
    };
    WordsAggregate.prototype.addItem = function (item) {
        this.items.push(item);
    };
    return WordsAggregate;
}());
exports.WordsAggregate = WordsAggregate;
