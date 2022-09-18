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
exports.MacBookPro = void 0;
var item_1 = require("../abstract/item");
var MacBookPro = /** @class */ (function (_super) {
    __extends(MacBookPro, _super);
    function MacBookPro(id, price) {
        return _super.call(this, id, price) || this;
    }
    MacBookPro.prototype.accept = function (visitor) {
        visitor.visitMacBookPro(this);
    };
    return MacBookPro;
}(item_1.Item));
exports.MacBookPro = MacBookPro;
