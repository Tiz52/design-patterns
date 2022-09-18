import {EmployeeMemento} from "../memento/employee-memento";
import {EmployeeOriginator} from "../originator/employee-originator";

export class Caretaker {
    private employeeHistory: EmployeeMemento[] = [];

    constructor() {
    }

    public save(employeeOriginator: EmployeeOriginator): void {
        this.employeeHistory.push(employeeOriginator.createMemento());
    }

    public revert(employeeOriginator: EmployeeOriginator): void {
        if (this.employeeHistory.length > 0) {
            employeeOriginator.setMemento(this.employeeHistory.pop());
        } else {
            console.log("Caretaker - No elements");
        }
    }

    public getItemCount() {
        return this.employeeHistory.length;
    }
}