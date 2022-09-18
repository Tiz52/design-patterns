import {Element} from "./element/abstract/element";
import {Book} from "./element/concrete/book";
import {Laptop} from "./element/concrete/laptop";
import {ObjectStructure} from "./object-structure/object-structure";
import {Visitor} from "./visitor/abstract/visitor";
import {IPhone} from "./element/concrete/iphone";
import {MacBookPro} from "./element/concrete/macbookpro";
import { VisitorFactory } from './factory/factory';
import { VisitorType } from "./factory/visitor-type";

export class Client {
    public execute(): void {
        let items: Element[] = this.initElements();
        let cart: ObjectStructure = new ObjectStructure(items);
        let visitor: Visitor = VisitorFactory.getConcreteVistor(VisitorType.DISCOUNT);
        cart.applyVisitor(visitor);
    }

    private initElements(): Element[] {
        let items: Element[] = [];
        
        items.push(new MacBookPro(63251, 14000));
        items.push(new MacBookPro(63250, 15000));
        items.push(new MacBookPro(63250, 12000));

        items.push(new IPhone(55324, 7000));
        items.push(new IPhone(78910, 8000));

        items.push(new Book(12345, 10));
        items.push(new Book(63254, 15));
        
        items.push(new Laptop(11198, 1500));

        return items;
    }
}

const client: Client = new Client();
client.execute();