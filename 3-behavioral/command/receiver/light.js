"use strict";
exports.__esModule = true;
exports.Light = void 0;
// Receptor
var Light = /** @class */ (function () {
    function Light() {
        this.isOn = false;
    }
    Light.prototype.getIsOn = function () {
        return this.isOn;
    };
    Light.prototype.toggle = function () {
        if (this.isOn) {
            this.off();
            this.isOn = false;
        }
        else {
            this.on();
            this.isOn = true;
        }
    };
    Light.prototype.on = function () {
        console.log("Light switched on.");
    };
    Light.prototype.off = function () {
        console.log("Light switched off.");
    };
    return Light;
}());
exports.Light = Light;
