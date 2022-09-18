import {HostingPlanAbstractFactory} from "../abstract/hosting-plan-abstract-factory";
import {DeluxeHostingPlan} from "../../products/abstract/deluxe-hosting-plan";
import {EconomyHostingPlan} from "../../products/abstract/economy-hosting-plan";
import {UltimateHostingPlan} from "../../products/abstract/ultimate-hosting-plan";
import {MacEconomyHostingPlan} from "../../products/concrete/mac-economy-hosting-plan";
import {MacDeluxeHostingPlan} from "../../products/concrete/mac-deluxe-hosting-plan";
import {MacUltimateHostingPlan} from "../../products/concrete/mac-ultimate-hosting-plan.ts";

// Factory Concreto
export class MacHostingPlanFactory extends HostingPlanAbstractFactory {
    public createEconomyHosting(): EconomyHostingPlan {
        return new MacEconomyHostingPlan();
    }

    public createDeluxeHosting(): DeluxeHostingPlan {
        return new MacDeluxeHostingPlan();
    }

    public createUltimateHosting(): UltimateHostingPlan {
        return new MacUltimateHostingPlan();
    }
}