import { OrderTemplate } from "../abstract/order-template";
import { OrderType } from "./order-type";
import { StoreOrder } from '../concrete/store-order';
import { WebOrder } from '../concrete/web-order';

export class OrderFactory {
    // Factory Method
    public static getConcreteOrder(orderType: OrderType): OrderTemplate {
        if (orderType == OrderType.STORE)
            return new StoreOrder();

        if (orderType == OrderType.WEB)
            return new WebOrder();
        
        return new StoreOrder();
    }
}