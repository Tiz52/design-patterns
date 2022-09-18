import {HostingPlanAbstractFactory} from "../abstract/hosting-plan-abstract-factory";
import {DeluxeHostingPlan} from "../../products/abstract/deluxe-hosting-plan";
import {EconomyHostingPlan} from "../../products/abstract/economy-hosting-plan";
import {UltimateHostingPlan} from "../../products/abstract/ultimate-hosting-plan";
import {WindowsEconomyHostingPlan} from "../../products/concrete/windows-economy-hosting-plan";
import {WindowsDeluxeHostingPlan} from "../../products/concrete/windows-deluxe-hosting-plan";
import {WindowsUltimateHostingPlan} from "../../products/concrete/windows-ultimate-hosting-plan";

// Factory Concreto
export class WindowsHostingPlanFactory extends HostingPlanAbstractFactory {
    public createEconomyHosting(): EconomyHostingPlan {
        return new WindowsEconomyHostingPlan();
    }

    public createDeluxeHosting(): DeluxeHostingPlan {
        return new WindowsDeluxeHostingPlan();
    }

    public createUltimateHosting(): UltimateHostingPlan {
        return new WindowsUltimateHostingPlan();
    }
}