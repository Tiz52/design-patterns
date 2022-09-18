import {DeluxeHostingPlan} from "../abstract/deluxe-hosting-plan";

// Producto Concreto
export class AndroidDeluxeHostingPlan implements DeluxeHostingPlan {
    public getFeatures(): string {
        return "Android Deluxe Hosting";
    }
}