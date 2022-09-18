"use strict";
exports.__esModule = true;
exports.CloseAllWindowsCommand = void 0;
//Colega Concreto
var CloseAllWindowsCommand = /** @class */ (function () {
    function CloseAllWindowsCommand(mediator) {
        this.mediator = mediator;
    }
    CloseAllWindowsCommand.prototype.execute = function () {
        this.mediator.closeAllWindows();
    };
    return CloseAllWindowsCommand;
}());
exports.CloseAllWindowsCommand = CloseAllWindowsCommand;
