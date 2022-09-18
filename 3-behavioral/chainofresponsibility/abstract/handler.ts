import {MyRequest} from "../request";

// Handler Abstracto
export abstract class Handler {
    protected successor: Handler;

    public setSuccessor(successor: Handler): void {
        this.successor = successor;
    }

    public abstract handleRequest(request: MyRequest): void;
}