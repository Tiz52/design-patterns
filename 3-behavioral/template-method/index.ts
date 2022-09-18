import {OrderTemplate} from "./abstract/order-template";
import {WebOrder} from "./concrete/web-order";
import {StoreOrder} from "./concrete/store-order";
import { OrderFactory } from "./factory/factory";
import { OrderType } from "./factory/order-type";

export class Client {
    public execute(): void {
        let order: OrderTemplate = OrderFactory.getConcreteOrder(OrderType.STORE);
        order.processOrder();
    }
}

const client: Client = new Client();
client.execute();