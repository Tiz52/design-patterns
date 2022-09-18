"use strict";
exports.__esModule = true;
exports.TerminalExpression = void 0;
var TerminalExpression = /** @class */ (function () {
    function TerminalExpression(data) {
        this.data = data;
    }
    TerminalExpression.prototype.interpret = function (value) {
        var values = value.split(" ");
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var item = values_1[_i];
            if (item == this.data) {
                return true;
            }
        }
        return false;
    };
    return TerminalExpression;
}());
exports.TerminalExpression = TerminalExpression;
