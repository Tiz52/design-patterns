"use strict";
exports.__esModule = true;
exports.Client = void 0;
var concrete_subject_1 = require("./concrete/concrete-subject");
var concrete_observer_b_1 = require("./concrete/concrete-observer-b");
var concrete_observer_a_1 = require("./concrete/concrete-observer-a");
var concrete_observer_c_1 = require("./concrete/concrete-observer-c");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var subject = new concrete_subject_1.ConcreteSubject();
        var observerA = new concrete_observer_a_1.ConcreteObserverA();
        var observerB = new concrete_observer_b_1.ConcreteObserverB();
        var observerC = new concrete_observer_c_1.ConcreteObserverC();
        subject.attach(observerA);
        subject.attach(observerB);
        subject.attach(observerC);
        subject.setState();
        subject.detach(observerA);
        subject.detach(observerB);
        //subject.detach(observerC);
        subject.setState();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
