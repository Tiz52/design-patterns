import {OrderTemplate} from "../abstract/order-template";

export class WebOrder extends OrderTemplate {
    public doCheckout(): void {
        console.log("WebOrder - Get items from cart,");
        console.log("WebOrder - Set gift preferences,");
        console.log("WebOrder - Set delivery address,");
        console.log("WebOrder - Set billing address.");
    }

    public doPayment(): void {
        console.log("WebOrder - Process payment without Card present");
    }

    public doDelivery(): void {
        console.log("WebOrder - Ship the item to address");
    }

    public doReceipt(): void {
        console.log("WebOrder -Email receipt");
    }
}