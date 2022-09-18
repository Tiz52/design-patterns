import {EconomyHostingPlan} from "../abstract/economy-hosting-plan";

// Producto Concreto
export class AndroidEconomyHostingPlan implements EconomyHostingPlan {
    public getFeatures(): string {
        return "Android Economy Hosting";
    }
}