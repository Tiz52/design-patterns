"use strict";
exports.__esModule = true;
exports.MyRequest = void 0;
var MyRequest = /** @class */ (function () {
    function MyRequest(requestType, amount) {
        this.requestType = requestType;
        this.amount = amount;
    }
    MyRequest.prototype.getRequestType = function () {
        return this.requestType;
    };
    MyRequest.prototype.getAmount = function () {
        return this.amount;
    };
    return MyRequest;
}());
exports.MyRequest = MyRequest;
