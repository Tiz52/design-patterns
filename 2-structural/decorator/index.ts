import {Pizza} from "./component/abstract/pizza";
import {Cheese} from "./decorator/concret/cheese";
import {Ham} from "./decorator/concret/ham";
import {Peppers} from "./decorator/concret/peppers";
import {PizzaFactory} from "./factory/pizza-factory";
import {PizzaType} from "./factory/pizza-type";

function clientCode() {
    let pizza: Pizza = PizzaFactory.getType(PizzaType.MEDIUM);
    //pizza = new Cheese(pizza);
    //pizza = new Cheese(pizza);
    //pizza = new Ham(pizza);
    pizza = new Peppers(pizza);
    console.log(pizza.getDescription());
    console.log(pizza.calculateCost());
}

clientCode();