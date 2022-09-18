"use strict";
exports.__esModule = true;
exports.ConcreteObserverA = void 0;
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        //if (subject.state < 3) {
        console.log('ConcreteObserverA: Reacted to the event.');
        //}
    };
    return ConcreteObserverA;
}());
exports.ConcreteObserverA = ConcreteObserverA;
