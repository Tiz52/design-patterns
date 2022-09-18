"use strict";
exports.__esModule = true;
var dialog_type_1 = require("./enums/dialog-type");
var dialog_factory_1 = require("./dialog-factory");
function clientCode() {
    var dialog = dialog_factory_1.DialogFactory.getType(dialog_type_1.DialogType.OFFICE);
    dialog.render();
}
clientCode();
