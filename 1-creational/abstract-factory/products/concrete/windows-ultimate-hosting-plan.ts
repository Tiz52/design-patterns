import {UltimateHostingPlan} from "../abstract/ultimate-hosting-plan";

// Producto Concreto
export class WindowsUltimateHostingPlan implements UltimateHostingPlan {
    public getFeatures(): string {
        return "Windows Ultimate Hosting";
    }
}