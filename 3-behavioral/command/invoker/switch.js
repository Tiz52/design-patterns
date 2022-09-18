"use strict";
exports.__esModule = true;
exports.Switch = void 0;
//Invocador
var Switch = /** @class */ (function () {
    function Switch() {
    }
    Switch.prototype.invoke = function (command) {
        command.execute();
    };
    return Switch;
}());
exports.Switch = Switch;
