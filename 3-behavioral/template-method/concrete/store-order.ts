import {OrderTemplate} from "../abstract/order-template";

export class StoreOrder extends OrderTemplate {
    public doCheckout(): void {
        console.log("StoreOrder - Ring up items from cart.");
    }

    public doPayment(): void {
        console.log("StoreOrder - Process payment with Card present");
    }

    public doDelivery(): void {
        console.log("StoreOrder - Bag items at counter");
    }

    public doReceipt(): void {
        console.log("StoreOrder - Print receipt");
    }
}