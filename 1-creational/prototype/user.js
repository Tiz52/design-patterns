"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.shallowCopy = function () {
        var clone = Object.create(this);
        return clone;
    };
    User.prototype.deepCopy = function () {
        var clone = Object.create(this);
        clone.id = Object.create(this.id);
        /*clone.preference = Object.create(this.preference);
        clone.preference.user = Object.create(this.preference.user);*/
        clone.preference = __assign(__assign({}, this.preference), { user: __assign({}, this) });
        return clone;
    };
    return User;
}());
exports.User = User;
