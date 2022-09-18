import {Formatter} from "../abstract/formatter";

export class IEEEFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***IEEE " + key + " -----" + value + " - IEEEFormatter";
    }
}