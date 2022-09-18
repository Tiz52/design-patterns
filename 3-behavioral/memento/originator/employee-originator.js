"use strict";
exports.__esModule = true;
exports.EmployeeOriginator = void 0;
var employee_memento_1 = require("../memento/employee-memento");
var EmployeeOriginator = /** @class */ (function () {
    function EmployeeOriginator() {
    }
    EmployeeOriginator.prototype.getAddress = function () {
        return this.address;
    };
    EmployeeOriginator.prototype.getName = function () {
        return this.name;
    };
    EmployeeOriginator.prototype.getPhone = function () {
        return this.phone;
    };
    EmployeeOriginator.prototype.setAddress = function (address) {
        this.address = address;
    };
    EmployeeOriginator.prototype.setName = function (name) {
        this.name = name;
    };
    EmployeeOriginator.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    EmployeeOriginator.prototype.toString = function () {
        return this.name + " : " + this.phone;
    };
    EmployeeOriginator.prototype.setMemento = function (employee) {
        this.name = employee.getName();
        this.phone = employee.getPhone();
    };
    EmployeeOriginator.prototype.createMemento = function () {
        return new employee_memento_1.EmployeeMemento(this.name, this.phone);
    };
    return EmployeeOriginator;
}());
exports.EmployeeOriginator = EmployeeOriginator;
