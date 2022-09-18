"use strict";
exports.__esModule = true;
var button_factory_1 = require("./button-factory");
var button_type_1 = require("./product/enum/button-type");
function clientCode() {
    var button = button_factory_1.ButtonFactory.getConcreteButton(button_type_1.ButtonType.iOS);
    button.onClick();
    button.render();
}
clientCode();
