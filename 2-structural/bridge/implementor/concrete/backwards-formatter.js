"use strict";
exports.__esModule = true;
exports.BackwardsFormatter = void 0;
var BackwardsFormatter = /** @class */ (function () {
    function BackwardsFormatter() {
    }
    BackwardsFormatter.prototype.format = function (key, value) {
        return "***BACKWARDS " + key + " -----" + value + " - BackwardsFormatter";
    };
    return BackwardsFormatter;
}());
exports.BackwardsFormatter = BackwardsFormatter;
