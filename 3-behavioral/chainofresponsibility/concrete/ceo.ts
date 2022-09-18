import {Handler} from "../abstract/handler";
import {MyRequest} from "../request";

export class CEO extends Handler {
    public handleRequest(request: MyRequest): void {
        console.log("CEOs can approve anything they want");
    }
}