"use strict";
exports.__esModule = true;
exports.TurnOnAllLightsCommand = void 0;
//Colega Concreto
var TurnOnAllLightsCommand = /** @class */ (function () {
    function TurnOnAllLightsCommand(mediator) {
        this.mediator = mediator;
    }
    TurnOnAllLightsCommand.prototype.execute = function () {
        this.mediator.turnOnAllLights();
    };
    return TurnOnAllLightsCommand;
}());
exports.TurnOnAllLightsCommand = TurnOnAllLightsCommand;
