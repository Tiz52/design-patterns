"use strict";
exports.__esModule = true;
exports.ObjectStructure = void 0;
var ObjectStructure = /** @class */ (function () {
    function ObjectStructure(items) {
        this.cart = [];
        this.cart = items;
    }
    ObjectStructure.prototype.removeItem = function (item) {
        var removeIndex = this.cart.indexOf(item);
        if (removeIndex !== -1) {
            this.cart.slice(removeIndex, 1);
        }
    };
    ObjectStructure.prototype.applyVisitor = function (visitor) {
        console.log("------- Visitor Breakdown -------");
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            item.accept(visitor);
        }
        visitor.print();
    };
    return ObjectStructure;
}());
exports.ObjectStructure = ObjectStructure;
