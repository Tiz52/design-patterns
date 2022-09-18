"use strict";
exports.__esModule = true;
var director_1 = require("./concrete/director");
var vp_1 = require("./concrete/vp");
var ceo_1 = require("./concrete/ceo");
var request_1 = require("./request");
var request_type_1 = require("./request-type");
function clientCode() {
    // Handlers concretos
    var director = new director_1.Director();
    var vp = new vp_1.VP();
    var ceo = new ceo_1.CEO();
    director.setSuccessor(vp);
    vp.setSuccessor(ceo);
    //let request: MyRequest = new MyRequest(RequestType.CONFERENCE, 500);
    //let request = new MyRequest(RequestType.PURCHASE, 1000);
    var request = new request_1.MyRequest(request_type_1.RequestType.PURCHASE, 2500);
    director.handleRequest(request);
}
clientCode();
