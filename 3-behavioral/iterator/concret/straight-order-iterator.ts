import {Iterator} from "../abstract/iterator";
import {WordsAggregate} from "./words-aggregate";

export class StraightOrderIterator implements Iterator<string> {
    private collection: WordsAggregate;
    private position: number = 0;

    constructor(collection: WordsAggregate) {
        this.collection = collection;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public key(): number {
        return this.position;
    }

    public valid(): boolean {
        return this.position < this.collection.getCount();
    }

    public rewind() {
        this.position = 0;
    }
}