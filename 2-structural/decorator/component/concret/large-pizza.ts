import {Pizza} from "../abstract/pizza";

export class LargePizza extends Pizza {
    constructor() {
        super();
        this.description = "Large Pizza (9.00)";
    }

    public getDescription(): string {
        return this.description;
    }

    public calculateCost(): number {
        return 9.00;
    }
}