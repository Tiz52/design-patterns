import {Formatter} from "../abstract/formatter";

export class BackwardsFormatter implements Formatter {
    public format(key: string, value: string): string {
        return"***BACKWARDS " + key + " -----" + value + " - BackwardsFormatter";
    }
}