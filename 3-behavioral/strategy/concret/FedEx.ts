import {Shipping} from "../abstract/shipping";

export class FedEx implements Shipping {
    public calculateCost(data: string): number {
        console.log('FedEx');
        return 50;
    }
}