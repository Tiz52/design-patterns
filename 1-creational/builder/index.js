"use strict";
exports.__esModule = true;
var sandwich_director_1 = require("./director/sandwich-director");
var builder_factory_1 = require("./builder-factory");
var sandwich_type_1 = require("./enums/sandwich-type");
function clientCode() {
    var builder = builder_factory_1.BuilderFactory.getBuilder(sandwich_type_1.SandwichType.CLUB);
    var sandwichDirector = new sandwich_director_1.SandwichDirector(builder);
    sandwichDirector.buildSandwich();
    var sandwich = sandwichDirector.getSandwich();
    sandwich.display();
}
clientCode();
