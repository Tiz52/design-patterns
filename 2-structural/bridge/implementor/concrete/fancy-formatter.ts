import {Formatter} from "../abstract/formatter";

export class FancyFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***FANCY " + key + " -----" + value + " - FancyFormatter";
    }
}