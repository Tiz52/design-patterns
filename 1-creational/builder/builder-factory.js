"use strict";
exports.__esModule = true;
exports.BuilderFactory = void 0;
var club_sandwich_builder_1 = require("./builder/concrete/club-sandwich-builder");
var monte_cristo_sandwich_builder_1 = require("./builder/concrete/monte-cristo-sandwich-builder");
var royal_sandwich_builder_1 = require("./builder/concrete/royal-sandwich-builder");
var sandwich_type_1 = require("./enums/sandwich-type");
var BuilderFactory = /** @class */ (function () {
    function BuilderFactory() {
    }
    // Factory Method
    BuilderFactory.getBuilder = function (sandwichType) {
        if (sandwichType == sandwich_type_1.SandwichType.CLUB)
            return new club_sandwich_builder_1.ClubSandwichBuilder();
        if (sandwichType == sandwich_type_1.SandwichType.MONTECRISTO)
            return new monte_cristo_sandwich_builder_1.MonteCristoSandwichBuilder();
        return new royal_sandwich_builder_1.RoyalSandwichBuilder();
    };
    return BuilderFactory;
}());
exports.BuilderFactory = BuilderFactory;
