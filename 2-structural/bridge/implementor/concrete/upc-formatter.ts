import {Formatter} from "../abstract/formatter";

export class UPCFormatter implements Formatter {
    public format(key: string, value: string): string {
        return "***UPC " + key + " -----" + value + " - UPCFormatter";
    }
}