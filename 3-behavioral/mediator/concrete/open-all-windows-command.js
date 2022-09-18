"use strict";
exports.__esModule = true;
exports.OpenAllWindowsCommand = void 0;
//Colega Concreto
var OpenAllWindowsCommand = /** @class */ (function () {
    function OpenAllWindowsCommand(mediator) {
        this.mediator = mediator;
    }
    OpenAllWindowsCommand.prototype.execute = function () {
        this.mediator.openAllWindows();
    };
    return OpenAllWindowsCommand;
}());
exports.OpenAllWindowsCommand = OpenAllWindowsCommand;
