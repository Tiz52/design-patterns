import {Visitor} from "../../visitor/abstract/visitor";

export interface Element {
    accept(visitor: Visitor): void;
}