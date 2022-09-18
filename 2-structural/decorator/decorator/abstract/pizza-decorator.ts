import {Pizza} from "../../component/abstract/pizza";

export class PizzaDecorator extends Pizza {
    protected pizza: Pizza; // Component

    constructor(pizza: Pizza) {
        super();
        this.pizza = pizza;
    }

    public getDescription(): string {
        return this.pizza.getDescription();
    }

    public calculateCost(): number {
        return this.pizza.calculateCost();
    }
}