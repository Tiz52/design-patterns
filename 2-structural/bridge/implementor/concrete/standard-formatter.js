"use strict";
exports.__esModule = true;
exports.StandardFormatter = void 0;
var StandardFormatter = /** @class */ (function () {
    function StandardFormatter() {
    }
    StandardFormatter.prototype.format = function (key, value) {
        return "***STANDARD " + key + " -----" + value + " - StandardFormatter";
    };
    return StandardFormatter;
}());
exports.StandardFormatter = StandardFormatter;
