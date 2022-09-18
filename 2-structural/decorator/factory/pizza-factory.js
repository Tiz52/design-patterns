"use strict";
exports.__esModule = true;
exports.PizzaFactory = void 0;
var pizza_type_1 = require("./pizza-type");
var small_pizza_1 = require("../component/concret/small-pizza");
var medium_pizza_1 = require("../component/concret/medium-pizza");
var large_pizza_1 = require("../component/concret/large-pizza");
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    // Factory Method
    PizzaFactory.getType = function (pizzaType) {
        if (pizzaType == pizza_type_1.PizzaType.SMALL) {
            return new small_pizza_1.SmallPizza();
        }
        if (pizzaType == pizza_type_1.PizzaType.MEDIUM) {
            return new medium_pizza_1.MediumPizza();
        }
        if (pizzaType == pizza_type_1.PizzaType.LARGE) {
            return new large_pizza_1.LargePizza();
        }
    };
    return PizzaFactory;
}());
exports.PizzaFactory = PizzaFactory;
