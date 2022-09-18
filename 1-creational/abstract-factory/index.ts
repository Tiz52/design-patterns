import {HostingPlanAbstractFactory} from "./factories/abstract/hosting-plan-abstract-factory";
import {OSType} from "./enums/os-type";
import {EconomyHostingPlan} from "./products/abstract/economy-hosting-plan";
import {DeluxeHostingPlan} from "./products/abstract/deluxe-hosting-plan";
import {UltimateHostingPlan} from "./products/abstract/ultimate-hosting-plan";
import {HostingPlanFactoryMethod} from "./factories/hosting-plan-factory-method";

function clientCode() {
    let hostingFactory: HostingPlanAbstractFactory = 
        HostingPlanFactoryMethod.getType(OSType.LINUX);

    let economyHostingPlan: EconomyHostingPlan = 
        hostingFactory.createEconomyHosting();
    console.log(economyHostingPlan.getFeatures());

    let deluxeHostingPlan: DeluxeHostingPlan = 
        hostingFactory.createDeluxeHosting();
    console.log(deluxeHostingPlan.getFeatures());

    let ultimateHostingPlan: UltimateHostingPlan = 
        hostingFactory.createUltimateHosting();
    console.log(ultimateHostingPlan.getFeatures());
}

clientCode();