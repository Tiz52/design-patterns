import {Aggregator} from "../abstract/aggregator";
import {Iterator} from "../abstract/iterator";
import { ReverseOrderIterator } from "./reverse-order-iterator";
import { StraightOrderIterator } from "./straight-order-iterator";

export class WordsAggregate implements Aggregator {
    private items: string[] = [];

    public createIterator(): Iterator<string> {
        return new StraightOrderIterator(this);
    }

    public createReverseIterator(): Iterator<string> {
        return new ReverseOrderIterator(this);
    }

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }
}