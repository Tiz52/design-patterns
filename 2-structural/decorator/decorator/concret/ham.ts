import {PizzaDecorator} from "../abstract/pizza-decorator";
import {Pizza} from "../../component/abstract/pizza";

export class Ham extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
        this.description = "Ham (1.00)";
    }

    public getDescription(): string {
        return this.pizza.getDescription() + ', ' + this.description;
    }

    public calculateCost(): number {
        return this.pizza.calculateCost() + 1.00;
    }
}