import {HostingPlanAbstractFactory} from "../abstract/hosting-plan-abstract-factory";
import {DeluxeHostingPlan} from "../../products/abstract/deluxe-hosting-plan";
import {EconomyHostingPlan} from "../../products/abstract/economy-hosting-plan";
import {UltimateHostingPlan} from "../../products/abstract/ultimate-hosting-plan";
import {AndroidEconomyHostingPlan} from "../../products/concrete/android-economy-hosting-plan";
import {AndroidDeluxeHostingPlan} from "../../products/concrete/android-deluxe-hosting-plan";
import {AndroidUltimateHostingPlan} from "../../products/concrete/android-ultimate-hosting-plan";

// Factory Concreto
export class AndroidHostingPlanFactory extends HostingPlanAbstractFactory {
    public createEconomyHosting(): EconomyHostingPlan {
        return new AndroidEconomyHostingPlan();
    }

    public createDeluxeHosting(): DeluxeHostingPlan {
        return new AndroidDeluxeHostingPlan();
    }

    public createUltimateHosting(): UltimateHostingPlan {
        return new AndroidUltimateHostingPlan();
    }
}