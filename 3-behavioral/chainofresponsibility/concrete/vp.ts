import {Handler} from "../abstract/handler";
import {MyRequest} from "../request";
import {RequestType} from "../request-type";

// Handler Concreto
export class VP extends Handler {
    static PURCHASE_MAX_AMOUNT = 1500;

    public handleRequest(request: MyRequest): void {
        if (request.getRequestType() == RequestType.CONFERENCE) {
            console.log("VP can approve conferences");
            return;
        }
        if (request.getRequestType() == RequestType.PURCHASE &&
            request.getAmount() < VP.PURCHASE_MAX_AMOUNT) {
            console.log("VPs can approve purchases below 1500");
            return;
        }
        console.log("VPs can not handle this request");
        this.successor.handleRequest(request);
    }
}