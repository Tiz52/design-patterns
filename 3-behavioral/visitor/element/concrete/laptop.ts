import {Item} from "../abstract/item";
import {Element} from "../abstract/element";
import {Visitor} from "../../visitor/abstract/visitor";

export class Laptop extends Item implements Element {
    constructor(id: number, price: number) {
        super(id, price);
    }

    public accept(visitor: Visitor): void {
        visitor.visitLaptop(this);
    }
}