export class Item {
    protected id: number;
    protected price: number;

    constructor(id: number, price: number) {
        this.id = id;
        this.price = price;
    }

    public getDiscount(percentage: number): number {
        return this.price * percentage;
    }

    public getId(): number {
        return this.id;
    }

    public getPrice(): number {
        return this.price;
    }
}