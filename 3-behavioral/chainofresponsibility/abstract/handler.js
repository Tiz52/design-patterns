"use strict";
exports.__esModule = true;
exports.Handler = void 0;
// Handler Abstracto
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.setSuccessor = function (successor) {
        this.successor = successor;
    };
    return Handler;
}());
exports.Handler = Handler;
