import {Subject} from "../abstract/subject";
import {RealSubject} from "./real-subject";
import {CallType} from "../call-type";

// Objeto Sustituto
export class Proxy implements Subject {
    // Objeto Real
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    // Security Proxy
    public securityRequest(): void {
        if (this.checkAccess()) {
            this.realSubject.securityRequest();
            this.logAccess();
        } else {
            console.log('You have no access');
        }
    }

    // Remote Proxy
    public remoteRequest(callType: CallType): void {
        if (callType == CallType.LOCAL)
        {
            console.log('Response from local proxy, reading from local json file');
            return;
        }
        if (callType == CallType.REMOTE) {
            this.realSubject.remoteRequest(CallType.REMOTE);
            return;
        }
        console.log('Invalid Call');
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}