"use strict";
exports.__esModule = true;
exports.Proxy = void 0;
var call_type_1 = require("../call-type");
// Objeto Sustituto
var Proxy = /** @class */ (function () {
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    // Security Proxy
    Proxy.prototype.securityRequest = function () {
        if (this.checkAccess()) {
            this.realSubject.securityRequest();
            this.logAccess();
        }
        else {
            console.log('You have no access');
        }
    };
    // Remote Proxy
    Proxy.prototype.remoteRequest = function (callType) {
        if (callType == call_type_1.CallType.LOCAL) {
            console.log('Response from local proxy, reading from local json file');
            return;
        }
        if (callType == call_type_1.CallType.REMOTE) {
            this.realSubject.remoteRequest(call_type_1.CallType.REMOTE);
            return;
        }
        console.log('Invalid Call');
    };
    Proxy.prototype.checkAccess = function () {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    return Proxy;
}());
exports.Proxy = Proxy;
