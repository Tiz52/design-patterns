import {Element} from "../element/abstract/element";
import {Visitor} from "../visitor/abstract/visitor";

export class ObjectStructure {
    private readonly cart: Element[] = [];

    constructor(items: Element[])
    {
        this.cart = items;
    }

    public removeItem(item: Element): void
    {
        const removeIndex:number = this.cart.indexOf(item);
        if (removeIndex !== -1) {
            this.cart.slice(removeIndex, 1);
        }
    }

    public applyVisitor(visitor: Visitor): void
    {
        console.log("------- Visitor Breakdown -------");
        for (const item of this.cart) {
            item.accept(visitor);
        }
        visitor.print();
    }
}