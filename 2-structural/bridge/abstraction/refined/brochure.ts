import {Manuscript} from "../manuscript";
import {Formatter} from "../../implementor/abstract/formatter";

export class Brochure extends Manuscript {
    private text: string;

    constructor(formatter: Formatter) {
        super(formatter);
    }

    public getText(): string {
        return this.text;
    }

    public changeText(text: string): void {
        this.text = text;
    }

    public print(): void {
        console.log(this.formatter.format("Brochure Text", this.text));
    }
}