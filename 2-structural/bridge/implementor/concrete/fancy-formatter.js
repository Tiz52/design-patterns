"use strict";
exports.__esModule = true;
exports.FancyFormatter = void 0;
var FancyFormatter = /** @class */ (function () {
    function FancyFormatter() {
    }
    FancyFormatter.prototype.format = function (key, value) {
        return "***FANCY " + key + " -----" + value + " - FancyFormatter";
    };
    return FancyFormatter;
}());
exports.FancyFormatter = FancyFormatter;
