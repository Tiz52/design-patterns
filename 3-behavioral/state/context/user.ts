import { UserState } from "../abstract/user-state";

export class User {
    private state: UserState;

    constructor(state: UserState) {
        this.transitionTo(state);
    }

    public transitionTo(state: UserState): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request(): void {
        this.state.handle();
    }
}