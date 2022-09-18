"use strict";
exports.__esModule = true;
exports.DialogFactory = void 0;
var ios_dialog_1 = require("./creator/concrete/ios-dialog");
var linux_dialog_1 = require("./creator/concrete/linux-dialog");
var web_dialog_1 = require("./creator/concrete/web-dialog");
var windows_dialog_1 = require("./creator/concrete/windows-dialog");
var office_dialog_1 = require("./creator/concrete/office-dialog");
var open_office_dialog_1 = require("./creator/concrete/open-office-dialog");
var dialog_type_1 = require("./enums/dialog-type");
var DialogFactory = /** @class */ (function () {
    function DialogFactory() {
    }
    // Factory Method
    DialogFactory.getType = function (dialogType) {
        if (dialogType == dialog_type_1.DialogType.WINDOWS)
            return new windows_dialog_1.WindowsDialog();
        if (dialogType == dialog_type_1.DialogType.LINUX)
            return new linux_dialog_1.LinuxDialog();
        if (dialogType == dialog_type_1.DialogType.WEB)
            return new web_dialog_1.WebDialog();
        if (dialogType == dialog_type_1.DialogType.iOS)
            return new ios_dialog_1.iOSDialog();
        if (dialogType == dialog_type_1.DialogType.OFFICE)
            return new office_dialog_1.OfficeDialog();
        if (dialogType == dialog_type_1.DialogType.OPEN_OFFICE)
            return new open_office_dialog_1.OpenOfficeDialog();
        return new web_dialog_1.WebDialog();
    };
    return DialogFactory;
}());
exports.DialogFactory = DialogFactory;
