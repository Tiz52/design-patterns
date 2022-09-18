"use strict";
exports.__esModule = true;
exports.Facade = void 0;
var Facade = /** @class */ (function () {
    function Facade(tiktokAPI, instragramAPI, facebookAPI) {
        this.tiktokAPI = tiktokAPI;
        this.instragramAPI = instragramAPI;
        this.facebookAPI = facebookAPI;
    }
    Facade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.tiktokAPI.operation1();
        result += this.instragramAPI.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.tiktokAPI.operationN();
        result += this.instragramAPI.operationN();
        return result;
    };
    Facade.prototype.publishOnAllSocialNetworks = function () {
        var result = 'Facade social networks\n';
        result += this.tiktokAPI.publish();
        result += this.instragramAPI.publish();
        result += this.facebookAPI.publish();
        return result;
    };
    return Facade;
}());
exports.Facade = Facade;
