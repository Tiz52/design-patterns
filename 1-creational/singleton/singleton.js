"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBusinessLogic = function () {
        console.log('someBusinessLogic');
    };
    return Singleton;
}());
exports.Singleton = Singleton;
