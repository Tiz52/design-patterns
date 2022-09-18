"use strict";
exports.__esModule = true;
exports.StraightOrderIterator = void 0;
var StraightOrderIterator = /** @class */ (function () {
    function StraightOrderIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    StraightOrderIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    StraightOrderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    };
    StraightOrderIterator.prototype.key = function () {
        return this.position;
    };
    StraightOrderIterator.prototype.valid = function () {
        return this.position < this.collection.getCount();
    };
    StraightOrderIterator.prototype.rewind = function () {
        this.position = 0;
    };
    return StraightOrderIterator;
}());
exports.StraightOrderIterator = StraightOrderIterator;
