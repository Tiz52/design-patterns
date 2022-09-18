import {HostingPlanAbstractFactory} from "../abstract/hosting-plan-abstract-factory";
import {DeluxeHostingPlan} from "../../products/abstract/deluxe-hosting-plan";
import {EconomyHostingPlan} from "../../products/abstract/economy-hosting-plan";
import {UltimateHostingPlan} from "../../products/abstract/ultimate-hosting-plan";
import {LinuxEconomyHostingPlan} from "../../products/concrete/linux-economy-hosting-plan";
import {LinuxDeluxeHostingPlan} from "../../products/concrete/linux-deluxe-hosting-plan";
import {LinuxUltimateHostingPlan} from "../../products/concrete/linux-ultimate-hosting-plan";

// Factory Concreto
export class LinuxHostingPlanFactory extends HostingPlanAbstractFactory {
    public createEconomyHosting(): EconomyHostingPlan {
        return new LinuxEconomyHostingPlan();
    }

    public createDeluxeHosting(): DeluxeHostingPlan {
        return new LinuxDeluxeHostingPlan();
    }

    public createUltimateHosting(): UltimateHostingPlan {
        return new LinuxUltimateHostingPlan();
    }
}