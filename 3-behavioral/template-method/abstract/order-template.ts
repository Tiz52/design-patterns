export abstract class OrderTemplate {
    protected isGift: boolean;

    // Template Method
    public processOrder(): void {
        this.doCheckout();
        this.doPayment();
        if (this.isGift) {
            this.wrapGift();
        } else {
            this.doReceipt();
        }
        this.doDelivery();
    }

    abstract doCheckout(): void;
    abstract doPayment(): void;
    abstract doReceipt(): void;
    abstract doDelivery(): void;

    private wrapGift(): void {
        console.log("Gift wrapped.");
    }
}