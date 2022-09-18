"use strict";
exports.__esModule = true;
exports.CloseAllDoorsCommand = void 0;
//Colega Concreto
var CloseAllDoorsCommand = /** @class */ (function () {
    function CloseAllDoorsCommand(mediator) {
        this.mediator = mediator;
    }
    CloseAllDoorsCommand.prototype.execute = function () {
        this.mediator.closeAllDoors();
    };
    return CloseAllDoorsCommand;
}());
exports.CloseAllDoorsCommand = CloseAllDoorsCommand;
