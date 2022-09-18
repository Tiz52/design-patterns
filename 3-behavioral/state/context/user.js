"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(state) {
        this.transitionTo(state);
    }
    User.prototype.transitionTo = function (state) {
        console.log("Context: Transition to ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setContext(this);
    };
    User.prototype.request = function () {
        this.state.handle();
    };
    return User;
}());
exports.User = User;
