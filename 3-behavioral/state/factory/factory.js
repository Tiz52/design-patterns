"use strict";
exports.__esModule = true;
exports.StateFactory = void 0;
var user_state_type_1 = require("./user-state-type");
var active_user_1 = require("../concrete/active-user");
var inactive_user_1 = require("../concrete/inactive-user");
var StateFactory = /** @class */ (function () {
    function StateFactory() {
    }
    // Factory Method
    StateFactory.getConcreteState = function (userStateType) {
        if (userStateType == user_state_type_1.UserStateType.ACTIVE)
            return new active_user_1.ActiveUser();
        if (userStateType == user_state_type_1.UserStateType.INACTIVE)
            return new inactive_user_1.InactiveUser();
        return new active_user_1.ActiveUser();
    };
    return StateFactory;
}());
exports.StateFactory = StateFactory;
