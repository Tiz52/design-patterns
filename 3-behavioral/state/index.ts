import {InactiveUser} from "./concrete/inactive-user";
import {ActiveUser} from "./concrete/active-user";
import { User } from "./context/user";
import { UserState } from "./abstract/user-state";
import { StateFactory } from "./factory/factory";
import { UserStateType } from "./factory/user-state-type";

export class Client {
    public execute(): void {
        let userState: UserState = StateFactory.getConcreteState(UserStateType.ACTIVE);
        let user = new User(userState);
        user.request();
        
        userState = StateFactory.getConcreteState(UserStateType.INACTIVE);
        user.transitionTo(userState);
        user.request();
    }
}

const client: Client = new Client();
client.execute();