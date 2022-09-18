import { UserId } from "./user-id";
import { UserPreference } from "./user-preference";

export class User {
    public id: UserId; // Object Reference
    public email: string; // Primitive
    public preference: UserPreference; // Object Reference

    public shallowCopy(): this {
        const clone = Object.create(this);
        return clone;
    }

    public deepCopy(): this {
        const clone = Object.create(this);
        clone.id = Object.create(this.id);
        clone.preference = Object.create(this.preference);
        clone.preference.user = Object.create(this.preference.user);

        /*clone.preference = {
            ...this.preference,
            user: { ...this },
        };*/

        return clone;
    }
}