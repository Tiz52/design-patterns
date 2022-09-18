import {Formatter} from "../abstract/formatter";

export class StandardFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***STANDARD " + key + " -----" + value + " - StandardFormatter";
    }
}