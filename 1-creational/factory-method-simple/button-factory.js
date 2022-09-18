"use strict";
exports.__esModule = true;
exports.ButtonFactory = void 0;
var linux_button_1 = require("./product/concrete/linux-button");
var office_button_1 = require("./product/concrete/office-button");
var open_office_button_1 = require("./product/concrete/open-office-button");
var windows_button_1 = require("./product/concrete/windows-button");
var html_button_1 = require("./product/concrete/html-button");
var ios_button_1 = require("./product/concrete/ios-button");
var button_type_1 = require("./product/enum/button-type");
var ButtonFactory = /** @class */ (function () {
    function ButtonFactory() {
    }
    // Factory Method
    ButtonFactory.getConcreteButton = function (buttonType) {
        if (buttonType == button_type_1.ButtonType.WINDOWS)
            return new windows_button_1.WindowsButton();
        if (buttonType == button_type_1.ButtonType.LINUX)
            return new linux_button_1.LinuxButton();
        if (buttonType == button_type_1.ButtonType.WEB)
            return new html_button_1.HtmlButton();
        if (buttonType == button_type_1.ButtonType.iOS)
            return new ios_button_1.iOSButton();
        if (buttonType == button_type_1.ButtonType.OFFICE)
            return new office_button_1.OfficeButton();
        if (buttonType == button_type_1.ButtonType.OPEN_OFFICE)
            return new open_office_button_1.OpenOfficeButton();
        return new html_button_1.HtmlButton();
    };
    return ButtonFactory;
}());
exports.ButtonFactory = ButtonFactory;
