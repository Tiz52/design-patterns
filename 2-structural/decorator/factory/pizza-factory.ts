import {PizzaType} from "./pizza-type";
import {SmallPizza} from "../component/concret/small-pizza";
import {Pizza} from "../component/abstract/pizza";
import {MediumPizza} from "../component/concret/medium-pizza";
import {LargePizza} from "../component/concret/large-pizza";

export class PizzaFactory {
    // Factory Method
    public static getType(pizzaType: PizzaType): Pizza {
        if (pizzaType == PizzaType.SMALL) {
            return new SmallPizza();
        }
        if (pizzaType == PizzaType.MEDIUM) {
            return new MediumPizza();
        }
        if (pizzaType == PizzaType.LARGE) {
            return new LargePizza();
        }
    }
}