"use strict";
exports.__esModule = true;
exports.AndExpression = void 0;
var AndExpression = /** @class */ (function () {
    function AndExpression(expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    AndExpression.prototype.interpret = function (context) {
        return this.expression1.interpret(context) &&
            this.expression2.interpret(context);
    };
    return AndExpression;
}());
exports.AndExpression = AndExpression;
