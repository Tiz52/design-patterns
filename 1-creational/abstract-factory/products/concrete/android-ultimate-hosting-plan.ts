import {UltimateHostingPlan} from "../abstract/ultimate-hosting-plan";

// Producto Concreto
export class AndroidUltimateHostingPlan implements UltimateHostingPlan {
    public getFeatures(): string {
        return "Android Ultimate Hosting";
    }
}