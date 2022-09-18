import {Iterator} from "../abstract/iterator";
import {WordsAggregate} from "./words-aggregate";

export class ReverseOrderIterator implements Iterator<string> {
    private collection: WordsAggregate;
    private position: number = 0;

    constructor(collection: WordsAggregate) {
        this.collection = collection;
        this.position = collection.getCount() - 1;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += -1;
        return item;
    }

    public key(): number {
        return this.position;
    }

    public valid(): boolean {
        return this.position >= 0;
    }

    public rewind() {
        this.position = this.collection.getCount() - 1;
    }
}