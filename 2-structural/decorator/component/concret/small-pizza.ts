import {Pizza} from "../abstract/pizza";

export class SmallPizza extends Pizza {
    constructor() {
        super();
        this.description = "Small Pizza (3.00)";
    }

    public getDescription(): string {
        return this.description;
    }

    public calculateCost(): number {
        return 3.00;
    }
}