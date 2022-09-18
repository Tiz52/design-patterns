"use strict";
exports.__esModule = true;
exports.WindowsButton = void 0;
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.onClick = function () {
        console.log('WindowsButton onClick');
    };
    WindowsButton.prototype.render = function () {
        console.log('WindowsButton render');
    };
    return WindowsButton;
}());
exports.WindowsButton = WindowsButton;
