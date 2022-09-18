import {UserState} from "../abstract/user-state";
import {ActiveUser} from "./active-user";

export class InactiveUser extends UserState {
    public handle(): void {
        console.log('InactiveUser state handle');
        //this.user.transitionTo(new ActiveUser());
    }
}