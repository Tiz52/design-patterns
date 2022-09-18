import {EconomyHostingPlan} from "../abstract/economy-hosting-plan";

// Producto Concreto
export class LinuxEconomyHostingPlan implements EconomyHostingPlan {
    public getFeatures(): string {
        return "Linux Economy Hosting";
    }
}