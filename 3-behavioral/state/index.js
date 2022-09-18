"use strict";
exports.__esModule = true;
exports.Client = void 0;
var user_1 = require("./context/user");
var factory_1 = require("./factory/factory");
var user_state_type_1 = require("./factory/user-state-type");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var userState = factory_1.StateFactory.getConcreteState(user_state_type_1.UserStateType.ACTIVE);
        var user = new user_1.User(userState);
        user.request();
        //userState = StateFactory.getConcreteState(UserStateType.INACTIVE);
        //user.transitionTo(userState);
        //user.request();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
