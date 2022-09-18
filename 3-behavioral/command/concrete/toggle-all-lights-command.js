"use strict";
exports.__esModule = true;
exports.ToggleAllLightsCommand = void 0;
// Comando Concreto
var ToggleAllLightsCommand = /** @class */ (function () {
    function ToggleAllLightsCommand(lights) {
        this.lights = lights;
    }
    ToggleAllLightsCommand.prototype.execute = function () {
        for (var _i = 0, _a = this.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            light.toggle();
        }
    };
    return ToggleAllLightsCommand;
}());
exports.ToggleAllLightsCommand = ToggleAllLightsCommand;
