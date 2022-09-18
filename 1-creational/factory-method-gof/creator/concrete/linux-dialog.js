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
exports.LinuxDialog = void 0;
var dialog_creator_1 = require("../abstract/dialog-creator");
var linux_button_1 = require("../../product/concrete/linux-button");
var LinuxDialog = /** @class */ (function (_super) {
    __extends(LinuxDialog, _super);
    function LinuxDialog() {
        return _super.call(this) || this;
    }
    // Factory Method (Concrete)
    LinuxDialog.prototype.createButton = function () {
        return new linux_button_1.LinuxButton();
    };
    return LinuxDialog;
}(dialog_creator_1.DialogCreator));
exports.LinuxDialog = LinuxDialog;
