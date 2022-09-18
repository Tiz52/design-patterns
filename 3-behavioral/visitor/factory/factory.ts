import { Visitor } from "../visitor/abstract/visitor";
import { DiscountVisitor } from "../visitor/concrete/discount-visitor";
import { VisitorType } from "./visitor-type";
import { SalesVisitor } from '../visitor/concrete/sales-visitor';

export class VisitorFactory {
    // Factory Method
    public static getConcreteVistor(visitorType: VisitorType): Visitor {
        if (visitorType == VisitorType.DISCOUNT)
            return new DiscountVisitor();

        if (visitorType == VisitorType.SALES)
            return new SalesVisitor();
        
        return new DiscountVisitor();
    }
}