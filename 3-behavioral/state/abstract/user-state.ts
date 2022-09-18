import { User } from "../context/user";

export abstract class UserState {
    protected user: User;

    public setContext(user: User) {
        this.user = user;
    }

    public abstract handle(): void;
}