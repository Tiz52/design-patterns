import { UserState } from "../abstract/user-state";
import { UserStateType } from "./user-state-type";
import { ActiveUser } from '../concrete/active-user';
import { InactiveUser } from "../concrete/inactive-user";

export class StateFactory {
    // Factory Method
    public static getConcreteState(userStateType: UserStateType): UserState {
        if (userStateType == UserStateType.ACTIVE)
            return new ActiveUser();

        if (userStateType == UserStateType.INACTIVE)
            return new InactiveUser();
        
        return new ActiveUser();
    }
}