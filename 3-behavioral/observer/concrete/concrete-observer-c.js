"use strict";
exports.__esModule = true;
exports.ConcreteObserverC = void 0;
var ConcreteObserverC = /** @class */ (function () {
    function ConcreteObserverC() {
    }
    ConcreteObserverC.prototype.update = function (subject) {
        console.log('ConcreteObserverC: Reacted to the event.');
    };
    return ConcreteObserverC;
}());
exports.ConcreteObserverC = ConcreteObserverC;
