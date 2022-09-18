"use strict";
exports.__esModule = true;
var os_type_1 = require("./enums/os-type");
var hosting_plan_factory_method_1 = require("./factories/hosting-plan-factory-method");
function clientCode() {
    var hostingFactory = hosting_plan_factory_method_1.HostingPlanFactoryMethod.getType(os_type_1.OSType.LINUX);
    var economyHostingPlan = hostingFactory.createEconomyHosting();
    console.log(economyHostingPlan.getFeatures());
    var deluxeHostingPlan = hostingFactory.createDeluxeHosting();
    console.log(deluxeHostingPlan.getFeatures());
    var ultimateHostingPlan = hostingFactory.createUltimateHosting();
    console.log(ultimateHostingPlan.getFeatures());
}
clientCode();
