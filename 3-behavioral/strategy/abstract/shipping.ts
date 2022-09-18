// Strategy (Abstraction)
export interface Shipping {
    calculateCost(data: string): number;
}