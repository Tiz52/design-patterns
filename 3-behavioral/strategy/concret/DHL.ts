import {Shipping} from "../abstract/shipping";

export class DHL implements Shipping {
    public calculateCost(data: string): number {
        console.log('DHL');
        return 40;
    }
}