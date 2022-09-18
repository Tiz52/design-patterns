"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NewPrinterAdapter = void 0;
var old_printer_1 = require("../adaptee/old-printer");
var fonts_1 = require("../enums/fonts");
var NewPrinterAdapter = /** @class */ (function (_super) {
    __extends(NewPrinterAdapter, _super);
    function NewPrinterAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewPrinterAdapter.prototype.changeColor = function (red, green, blue) {
        this.changeGrayscale((red + green + blue) / 3);
    };
    NewPrinterAdapter.prototype.changeDuplex = function (duplex) {
    };
    NewPrinterAdapter.prototype.changeFont = function (font) {
        if (font === fonts_1.Fonts.TIMES) {
            this.changeFontNumber(1);
        }
        if (font === fonts_1.Fonts.ARIAL) {
            this.changeFontNumber(2);
        }
        if (fonts_1.Fonts.MONOSPACED) {
            this.changeFontNumber(3);
        }
    };
    return NewPrinterAdapter;
}(old_printer_1.OldPrinter));
exports.NewPrinterAdapter = NewPrinterAdapter;
