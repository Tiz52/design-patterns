import {Formatter} from "../implementor/abstract/formatter";

export abstract class Manuscript {
    //implementor
    protected formatter: Formatter;

    protected constructor(formatter: Formatter) {
        this.formatter = formatter;
    }

    abstract print(): void;
}