import {DeluxeHostingPlan} from "../abstract/deluxe-hosting-plan";

// Producto Concreto
export class MacDeluxeHostingPlan implements DeluxeHostingPlan {
    public getFeatures(): string {
        return "Mac Deluxe Hosting";
    }
}