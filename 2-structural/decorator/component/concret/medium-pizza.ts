import {Pizza} from "../abstract/pizza";

export class MediumPizza extends Pizza {
    constructor() {
        super();
        this.description = "Medium Pizza (6.00)";
    }

    public getDescription(): string {
        return this.description;
    }

    public calculateCost(): number {
        return 6.00;
    }
}