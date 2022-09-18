"use strict";
exports.__esModule = true;
exports.NewPrinter = void 0;
var NewPrinter = /** @class */ (function () {
    function NewPrinter() {
    }
    NewPrinter.prototype.changeColor = function (red, green, blue) {
        console.log("New Printer changeColor");
    };
    NewPrinter.prototype.changeDuplex = function (duplex) {
        console.log("New Printer changeDuplex");
    };
    NewPrinter.prototype.changeFont = function (font) {
        console.log("New Printer changeFont");
    };
    return NewPrinter;
}());
exports.NewPrinter = NewPrinter;
