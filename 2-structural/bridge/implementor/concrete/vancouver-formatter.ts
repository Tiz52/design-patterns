import {Formatter} from "../abstract/formatter";

export class VancouverFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***Vancouver " + key + " -----" + value + " - VancouverFormatter";
    }
}