"use strict";
exports.__esModule = true;
exports.ToggleCommand = void 0;
// Comando Concreto
var ToggleCommand = /** @class */ (function () {
    function ToggleCommand(light) {
        this.light = light;
    }
    ToggleCommand.prototype.execute = function () {
        this.light.toggle();
    };
    return ToggleCommand;
}());
exports.ToggleCommand = ToggleCommand;
