"use strict";
exports.__esModule = true;
exports.OpenAllDoorsCommand = void 0;
//Colega Concreto
var OpenAllDoorsCommand = /** @class */ (function () {
    function OpenAllDoorsCommand(mediator) {
        this.mediator = mediator;
    }
    OpenAllDoorsCommand.prototype.execute = function () {
        this.mediator.openAllDoors();
    };
    return OpenAllDoorsCommand;
}());
exports.OpenAllDoorsCommand = OpenAllDoorsCommand;
