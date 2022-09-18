import {Handler} from "../abstract/handler";
import {RequestType} from "../request-type";
import {MyRequest} from "../request";

// Handler Concreto
export class Director extends Handler {
    public handleRequest(request: MyRequest): void {
        if (request.getRequestType() == RequestType.CONFERENCE) {
            console.log("Directors can approve conferences");
        } else {
            console.log("Directors can not handle this request");
            this.successor.handleRequest(request);
        }
    }
}