import { CallType } from "../call-type";

export interface Subject {
    securityRequest(): void;
    remoteRequest(callType: CallType): void;
}