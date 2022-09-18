import {RealSubject} from "./concrete/real-subject";
import {Proxy} from "./concrete/proxy";
import {CallType} from "./call-type";

function clientCode() {
    console.log('Client: Executing the client code with a real subject:');
    const realSubject = new RealSubject();
    realSubject.securityRequest();
    realSubject.remoteRequest(CallType.REMOTE);

    console.log('*****************************************************');
    console.log('Client: Executing the same client code with a proxy:');
    const proxy = new Proxy(realSubject);
    proxy.securityRequest(); // Security Proxy
    
    const callType: CallType = CallType.REMOTE;
    proxy.remoteRequest(callType); // Remote Proxy
}

clientCode();