import {UserState} from "../abstract/user-state";
import {InactiveUser} from "./inactive-user";

export class ActiveUser extends UserState {
    public handle(): void {
        console.log('ActiveUser state handle');
        //this.user.transitionTo(new InactiveUser());
    }
}