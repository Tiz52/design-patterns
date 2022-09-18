export class EmployeeMemento {
    private readonly name: string;
    private readonly phone: string;

    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
    }

    public getName(): string {
        return this.name;
    }

    public getPhone(): string {
        return this.phone;
    }
}