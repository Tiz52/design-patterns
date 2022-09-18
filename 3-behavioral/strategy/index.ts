import {Context} from "./context/context";
import { Shipping } from './abstract/shipping';
import { ShippingFactory } from './factory/factory';
import { ShippingType } from "./factory/shipping-type";

export class Client {
    public execute(): void {
        let strategy: Shipping = ShippingFactory.getConcreteStrategy(ShippingType.OlvaCourier);
        const context = new Context(strategy);
        console.log(context.calculateCost('data'));
    }
}

const client: Client = new Client();
client.execute();