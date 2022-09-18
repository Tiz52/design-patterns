"use strict";
exports.__esModule = true;
exports.OrExpression = void 0;
var OrExpression = /** @class */ (function () {
    function OrExpression(expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    OrExpression.prototype.interpret = function (context) {
        return this.expression1.interpret(context) ||
            this.expression2.interpret(context);
    };
    return OrExpression;
}());
exports.OrExpression = OrExpression;
