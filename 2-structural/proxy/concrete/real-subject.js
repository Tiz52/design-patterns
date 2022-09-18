"use strict";
exports.__esModule = true;
exports.RealSubject = void 0;
// Objeto Real
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.securityRequest = function () {
        console.log('RealSubject: Handling security request.');
    };
    RealSubject.prototype.remoteRequest = function (callType) {
        console.log('RealSubject: Handling Remote API Request');
    };
    return RealSubject;
}());
exports.RealSubject = RealSubject;
