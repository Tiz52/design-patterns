"use strict";
exports.__esModule = true;
exports.ReverseOrderIterator = void 0;
var ReverseOrderIterator = /** @class */ (function () {
    function ReverseOrderIterator(collection) {
        this.position = 0;
        this.collection = collection;
        this.position = collection.getCount() - 1;
    }
    ReverseOrderIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    ReverseOrderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += -1;
        return item;
    };
    ReverseOrderIterator.prototype.key = function () {
        return this.position;
    };
    ReverseOrderIterator.prototype.valid = function () {
        return this.position >= 0;
    };
    ReverseOrderIterator.prototype.rewind = function () {
        this.position = this.collection.getCount() - 1;
    };
    return ReverseOrderIterator;
}());
exports.ReverseOrderIterator = ReverseOrderIterator;
