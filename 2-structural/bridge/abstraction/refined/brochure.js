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
exports.Brochure = void 0;
var manuscript_1 = require("../manuscript");
var Brochure = /** @class */ (function (_super) {
    __extends(Brochure, _super);
    function Brochure(formatter) {
        return _super.call(this, formatter) || this;
    }
    Brochure.prototype.getText = function () {
        return this.text;
    };
    Brochure.prototype.changeText = function (text) {
        this.text = text;
    };
    Brochure.prototype.print = function () {
        console.log(this.formatter.format("Brochure Text", this.text));
    };
    return Brochure;
}(manuscript_1.Manuscript));
exports.Brochure = Brochure;
