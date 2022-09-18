import {Handler} from "./abstract/handler";
import {Director} from "./concrete/director";
import {VP} from "./concrete/vp";
import {CEO} from "./concrete/ceo";
import {MyRequest} from "./request";
import {RequestType} from "./request-type";

function clientCode() {
    // Handlers concretos
    let director: Handler = new Director();
    let vp: Handler = new VP();
    let ceo: Handler = new CEO();

    director.setSuccessor(vp);
    vp.setSuccessor(ceo);

    //let request: MyRequest = new MyRequest(RequestType.CONFERENCE, 500);
    //let request = new MyRequest(RequestType.PURCHASE, 1000);
    let request = new MyRequest(RequestType.PURCHASE, 2500);
    director.handleRequest(request);
}

clientCode();