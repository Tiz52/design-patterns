"use strict";
exports.__esModule = true;
exports.HtmlButton = void 0;
var HtmlButton = /** @class */ (function () {
    function HtmlButton() {
    }
    HtmlButton.prototype.onClick = function () {
        console.log('HtmlButton onClick');
    };
    HtmlButton.prototype.render = function () {
        console.log('HtmlButton render');
    };
    return HtmlButton;
}());
exports.HtmlButton = HtmlButton;
