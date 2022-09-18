"use strict";
exports.__esModule = true;
exports.FormatterFactory = void 0;
var formatter_type_1 = require("./formatter-type");
var standard_formatter_1 = require("../implementor/concrete/standard-formatter");
var fancy_formatter_1 = require("../implementor/concrete/fancy-formatter");
var backwards_formatter_1 = require("../implementor/concrete/backwards-formatter");
var apa_formatter_1 = require("../implementor/concrete/apa-formatter");
var ieee_formatter_1 = require("../implementor/concrete/ieee-formatter");
var vancouver_formatter_1 = require("../implementor/concrete/vancouver-formatter");
var upc_formatter_1 = require("../implementor/concrete/upc-formatter");
var FormatterFactory = /** @class */ (function () {
    function FormatterFactory() {
    }
    // Factory Method
    FormatterFactory.getType = function (formatterType) {
        if (formatterType == formatter_type_1.FormatterType.STANDARD) {
            return new standard_formatter_1.StandardFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.FANCY) {
            return new fancy_formatter_1.FancyFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.BACKWARDS) {
            return new backwards_formatter_1.BackwardsFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.APA) {
            return new apa_formatter_1.APAFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.IEEE) {
            return new ieee_formatter_1.IEEEFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.VANCOUVER) {
            return new vancouver_formatter_1.VancouverFormatter();
        }
        if (formatterType == formatter_type_1.FormatterType.UPC) {
            return new upc_formatter_1.UPCFormatter();
        }
        return new standard_formatter_1.StandardFormatter();
    };
    return FormatterFactory;
}());
exports.FormatterFactory = FormatterFactory;
