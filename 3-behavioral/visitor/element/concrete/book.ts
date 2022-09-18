import {Item} from "../abstract/item";
import {Element} from "../abstract/element";
import {Visitor} from "../../visitor/abstract/visitor";

export class Book extends Item implements Element {
    constructor(id: number, price: number)  {
        super(id, price);
    }

    public accept(visitor: Visitor): void {
        visitor.visitBook(this);
    }
}