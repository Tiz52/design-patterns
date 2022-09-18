import {Expression} from "../abstract/expression";

export class TerminalExpression implements Expression {
    private readonly data: string;

    constructor(data: string) {
        this.data = data;
    }

    public interpret(value: string): boolean {
        let values: string[] = value.split(" ");
        for (let item of values) {
            if (item == this.data) {
                return true;
            }
        }
        return false;
    }
}