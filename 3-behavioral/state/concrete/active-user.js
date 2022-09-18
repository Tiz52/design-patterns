"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ActiveUser = void 0;
var user_state_1 = require("../abstract/user-state");
var ActiveUser = /** @class */ (function (_super) {
    __extends(ActiveUser, _super);
    function ActiveUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActiveUser.prototype.handle = function () {
        console.log('ActiveUser state handle');
        //this.user.transitionTo(new InactiveUser());
    };
    return ActiveUser;
}(user_state_1.UserState));
exports.ActiveUser = ActiveUser;
