import {Iterator} from "./iterator";

export interface Aggregator {
    createIterator(): Iterator<string>;
    createReverseIterator(): Iterator<string>;
}