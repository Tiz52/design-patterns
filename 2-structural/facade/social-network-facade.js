"use strict";
exports.__esModule = true;
exports.SocialNetworkFacade = void 0;
var tiktok_api_1 = require("./tiktok-api");
var instragram_api_1 = require("./instragram-api");
var facebook_api_1 = require("./facebook-api");
var SocialNetworkFacade = /** @class */ (function () {
    function SocialNetworkFacade() {
        this.tiktokAPI = new tiktok_api_1.TiktokAPI();
        this.instragramAPI = new instragram_api_1.InstragramAPI();
        this.facebookAPI = new facebook_api_1.FacebookAPI();
    }
    SocialNetworkFacade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.tiktokAPI.operation1();
        result += this.instragramAPI.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.tiktokAPI.operationN();
        result += this.instragramAPI.operationN();
        return result;
    };
    SocialNetworkFacade.prototype.publishOnAllSocialNetworks = function () {
        var result = 'Facade social networks\n';
        result += this.tiktokAPI.publish();
        result += this.instragramAPI.publish();
        result += this.facebookAPI.publish();
        return result;
    };
    return SocialNetworkFacade;
}());
exports.SocialNetworkFacade = SocialNetworkFacade;
