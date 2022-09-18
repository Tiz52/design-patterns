import {EmployeeMemento} from "../memento/employee-memento";

export class EmployeeOriginator {
    private name: string;
    private address: string;
    private phone: string;

    public getAddress(): string {
        return this.address;
    }

    public getName(): string {
        return this.name;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public toString(): string {
        return this.name + " : " + this.phone;
    }

    public setMemento(employee: EmployeeMemento): void { // revert
        this.name = employee.getName();
        this.phone = employee.getPhone();
    }

    public createMemento(): EmployeeMemento { // save
        return new EmployeeMemento(this.name, this.phone);
    }
}