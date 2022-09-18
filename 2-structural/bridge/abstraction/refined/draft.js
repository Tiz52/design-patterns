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
exports.Draft = void 0;
var manuscript_1 = require("../manuscript");
var Draft = /** @class */ (function (_super) {
    __extends(Draft, _super);
    function Draft(formatter) {
        return _super.call(this, formatter) || this;
    }
    Draft.prototype.getText = function () {
        return this.text;
    };
    Draft.prototype.changeText = function (text) {
        this.text = text;
    };
    Draft.prototype.print = function () {
        console.log(this.formatter.format("Draft Text", this.text));
    };
    return Draft;
}(manuscript_1.Manuscript));
exports.Draft = Draft;
