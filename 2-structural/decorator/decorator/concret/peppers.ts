import {PizzaDecorator} from "../abstract/pizza-decorator";
import {Pizza} from "../../component/abstract/pizza";

export class Peppers extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
        this.description = "Peppers (0.50)";
    }

    public getDescription(): string {
        return this.pizza.getDescription() + ', ' + this.description;
    }

    public calculateCost(): number {
        return this.pizza.calculateCost() + 0.50;
    }
}