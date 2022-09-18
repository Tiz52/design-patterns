import {Formatter} from "../abstract/formatter";

export class APAFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***APA " + key + " -----" + value + " - APAFormatter";
    }
}