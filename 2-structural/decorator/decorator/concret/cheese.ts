import {PizzaDecorator} from "../abstract/pizza-decorator";
import {Pizza} from "../../component/abstract/pizza";

export class Cheese extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
        this.description = "Cheese (1.25)";
    }

    public getDescription(): string {
        return this.pizza.getDescription() + ', ' + this.description;
    }

    public calculateCost(): number {
        return this.pizza.calculateCost() + 1.25;
    }
}