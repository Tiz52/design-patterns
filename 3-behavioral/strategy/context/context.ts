import {Shipping} from "../abstract/shipping";

export class Context {
    // Strategy (Abstraction)
    private strategy: Shipping;

    constructor(strategy: Shipping) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Shipping) {
        this.strategy = strategy;
    }

    public calculateCost(data: string): number {
        return this.strategy.calculateCost(data);
    }
}