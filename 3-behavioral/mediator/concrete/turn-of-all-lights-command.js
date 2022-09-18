"use strict";
exports.__esModule = true;
exports.TurnOffAllLightsCommand = void 0;
//Colega Concreto
var TurnOffAllLightsCommand = /** @class */ (function () {
    function TurnOffAllLightsCommand(mediator) {
        this.mediator = mediator;
    }
    TurnOffAllLightsCommand.prototype.execute = function () {
        this.mediator.turnOffAllLights();
    };
    return TurnOffAllLightsCommand;
}());
exports.TurnOffAllLightsCommand = TurnOffAllLightsCommand;
