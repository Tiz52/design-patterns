import {Shipping} from "../abstract/shipping";

export class OlvaCourier implements Shipping {
    public calculateCost(data: string): number {
        console.log('OlvaCourier');
        return 30;
    }
}