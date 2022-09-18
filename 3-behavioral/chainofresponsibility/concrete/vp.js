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
exports.VP = void 0;
var handler_1 = require("../abstract/handler");
var request_type_1 = require("../request-type");
// Handler Concreto
var VP = /** @class */ (function (_super) {
    __extends(VP, _super);
    function VP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VP.prototype.handleRequest = function (request) {
        if (request.getRequestType() == request_type_1.RequestType.CONFERENCE) {
            console.log("VP can approve conferences");
            return;
        }
        if (request.getRequestType() == request_type_1.RequestType.PURCHASE &&
            request.getAmount() < VP.PURCHASE_MAX_AMOUNT) {
            console.log("VPs can approve purchases below 1500");
            return;
        }
        console.log("VPs can not handle this request");
        this.successor.handleRequest(request);
    };
    VP.PURCHASE_MAX_AMOUNT = 1500;
    return VP;
}(handler_1.Handler));
exports.VP = VP;
