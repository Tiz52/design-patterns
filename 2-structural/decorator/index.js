"use strict";
exports.__esModule = true;
var peppers_1 = require("./decorator/concret/peppers");
var pizza_factory_1 = require("./factory/pizza-factory");
var pizza_type_1 = require("./factory/pizza-type");
function clientCode() {
    var pizza = pizza_factory_1.PizzaFactory.getType(pizza_type_1.PizzaType.MEDIUM);
    //pizza = new Cheese(pizza);
    //pizza = new Cheese(pizza);
    //pizza = new Ham(pizza);
    pizza = new peppers_1.Peppers(pizza);
    console.log(pizza.getDescription());
    console.log(pizza.calculateCost());
}
clientCode();
