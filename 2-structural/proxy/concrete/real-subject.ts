import {Subject} from "../abstract/subject";
import { CallType } from "../call-type";

// Objeto Real
export class RealSubject implements Subject {
    public securityRequest(): void {
        console.log('RealSubject: Handling security request.');
    }

    public remoteRequest(callType: CallType): void {
        console.log('RealSubject: Handling Remote API Request');
    }
}