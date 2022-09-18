"use strict";
exports.__esModule = true;
exports.Client = void 0;
var caretaker_1 = require("./caretaker/caretaker");
var employee_originator_1 = require("./originator/employee-originator");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var employeeOriginator = new employee_originator_1.EmployeeOriginator();
        employeeOriginator.setName("John Wick");
        employeeOriginator.setAddress("111 Main Street");
        employeeOriginator.setPhone("888-555-1212");
        console.log("Employee before save: " + employeeOriginator);
        var caretaker = new caretaker_1.Caretaker();
        caretaker.save(employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        employeeOriginator.setPhone("444-555-6666");
        caretaker.save(employeeOriginator);
        console.log("Employee after changed phone number save: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        employeeOriginator.setPhone("555-444-6666");
        caretaker.save(employeeOriginator);
        console.log("Employee after changed phone number save: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        employeeOriginator.setPhone("333-999-6666"); // <--- we haven't called save!
        caretaker.revert(employeeOriginator);
        console.log("Reverts to last save point: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        caretaker.revert(employeeOriginator);
        console.log("Reverted to original: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        caretaker.revert(employeeOriginator);
        console.log("Reverted to original: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
        caretaker.revert(employeeOriginator);
        console.log("Reverted to original: " + employeeOriginator);
        console.log('CareTaker mementos: ' + caretaker.getItemCount());
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
