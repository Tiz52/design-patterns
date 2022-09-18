import {Prototype} from "./prototype";

export class CircularReference {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}