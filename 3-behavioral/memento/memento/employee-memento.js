"use strict";
exports.__esModule = true;
exports.EmployeeMemento = void 0;
var EmployeeMemento = /** @class */ (function () {
    function EmployeeMemento(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    EmployeeMemento.prototype.getName = function () {
        return this.name;
    };
    EmployeeMemento.prototype.getPhone = function () {
        return this.phone;
    };
    return EmployeeMemento;
}());
exports.EmployeeMemento = EmployeeMemento;
