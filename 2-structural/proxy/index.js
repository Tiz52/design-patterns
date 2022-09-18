"use strict";
exports.__esModule = true;
var real_subject_1 = require("./concrete/real-subject");
var proxy_1 = require("./concrete/proxy");
var call_type_1 = require("./call-type");
function clientCode() {
    console.log('Client: Executing the client code with a real subject:');
    var realSubject = new real_subject_1.RealSubject();
    realSubject.securityRequest();
    realSubject.remoteRequest(call_type_1.CallType.REMOTE);
    console.log('*****************************************************');
    console.log('Client: Executing the same client code with a proxy:');
    var proxy = new proxy_1.Proxy(realSubject);
    proxy.securityRequest(); // Security Proxy
    var callType = call_type_1.CallType.REMOTE;
    proxy.remoteRequest(callType); // Remote Proxy
}
clientCode();
