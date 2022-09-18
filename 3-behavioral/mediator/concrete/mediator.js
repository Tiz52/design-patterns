"use strict";
exports.__esModule = true;
exports.Mediator = void 0;
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.lights = [];
        this.doors = [];
        this.windows = [];
    }
    Mediator.prototype.registerLight = function (light) {
        this.lights.push(light);
    };
    Mediator.prototype.registerDoor = function (door) {
        this.doors.push(door);
    };
    Mediator.prototype.registerWindow = function (window) {
        this.windows.push(window);
    };
    Mediator.prototype.turnOnAllLights = function () {
        for (var _i = 0, _a = this.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            if (!light.getIsOn()) {
                light.toggle();
            }
        }
    };
    Mediator.prototype.turnOffAllLights = function () {
        for (var _i = 0, _a = this.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            if (light.getIsOn()) {
                light.toggle();
            }
        }
    };
    Mediator.prototype.openAllDoors = function () {
        for (var _i = 0, _a = this.doors; _i < _a.length; _i++) {
            var door = _a[_i];
            if (!door.getIsOpen()) {
                door.toggle();
            }
        }
    };
    Mediator.prototype.closeAllDoors = function () {
        for (var _i = 0, _a = this.doors; _i < _a.length; _i++) {
            var door = _a[_i];
            if (door.getIsOpen()) {
                door.toggle();
            }
        }
    };
    Mediator.prototype.openAllWindows = function () {
        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
            var window_1 = _a[_i];
            if (!window_1.getIsOpen()) {
                window_1.toggle();
            }
        }
    };
    Mediator.prototype.closeAllWindows = function () {
        for (var _i = 0, _a = this.windows; _i < _a.length; _i++) {
            var window_2 = _a[_i];
            if (window_2.getIsOpen()) {
                window_2.toggle();
            }
        }
    };
    return Mediator;
}());
exports.Mediator = Mediator;
