import {RequestType} from "./request-type";

export class MyRequest {
    private readonly requestType: RequestType;
    private readonly amount: number;

    constructor(requestType: RequestType, amount: number) {
        this.requestType = requestType;
        this.amount = amount;
    }

    public getRequestType(): RequestType {
        return this.requestType;
    }

    public getAmount(): number {
        return this.amount;
    }
}