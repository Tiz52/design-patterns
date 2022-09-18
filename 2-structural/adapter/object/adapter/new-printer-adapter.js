"use strict";
exports.__esModule = true;
exports.NewPrinterAdapter = void 0;
var fonts_1 = require("../enums/fonts");
var NewPrinterAdapter = /** @class */ (function () {
    function NewPrinterAdapter(oldPrinter) {
        this.oldPrinter = null;
        this.oldPrinter = oldPrinter;
    }
    NewPrinterAdapter.prototype.changeColor = function (red, green, blue) {
        this.oldPrinter.changeGrayscale((red + green + blue) / 3);
    };
    NewPrinterAdapter.prototype.changeDuplex = function (duplex) {
    };
    NewPrinterAdapter.prototype.changeFont = function (font) {
        if (font === fonts_1.Fonts.TIMES) {
            this.oldPrinter.changeFontNumber(1);
        }
        if (font === fonts_1.Fonts.ARIAL) {
            this.oldPrinter.changeFontNumber(2);
        }
        if (fonts_1.Fonts.MONOSPACED) {
            this.oldPrinter.changeFontNumber(3);
        }
    };
    return NewPrinterAdapter;
}());
exports.NewPrinterAdapter = NewPrinterAdapter;
