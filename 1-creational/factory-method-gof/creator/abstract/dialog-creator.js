"use strict";
exports.__esModule = true;
exports.DialogCreator = void 0;
var DialogCreator = /** @class */ (function () {
    function DialogCreator() {
    }
    DialogCreator.prototype.render = function () {
        var okButton = this.createButton(); // Calling to the factory method
        okButton.onClick();
        okButton.render();
    };
    return DialogCreator;
}());
exports.DialogCreator = DialogCreator;
