import {Expression} from "../abstract/expression";

export class OrExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    public interpret(context: string): boolean {
        return this.expression1.interpret(context) || 
            this.expression2.interpret(context);
    }
}