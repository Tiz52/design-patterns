import {Expression} from "./abstract/expression";
import {TerminalExpression} from "./concrete/terminal-expression";
import {AndExpression} from "./concrete/and-expression";
import {OrExpression} from "./concrete/or-expression";

export class Client {
    public execute(): void {
        //let context: string = "Lions";
        //let context: string = "Lions Tigers";
        let context: string = "Lions Bears";
        //let context: string = "Tigers Bears";
        let expression: Expression = this.buildInterpreterTree();
        console.log(context + " is " + expression.interpret(context));
    }

    private buildInterpreterTree(): Expression {
        let terminal1: Expression = new TerminalExpression("Lions");
        let terminal2: Expression = new TerminalExpression("Tigers");
        let terminal3: Expression  = new TerminalExpression("Bears");
        let alternation1: Expression = new AndExpression(terminal2, terminal3);
        let alternation2: Expression = new OrExpression(terminal1, alternation1);
        
        return new AndExpression(terminal3, alternation2);
    }
}

const client: Client = new Client();
client.execute();