import { User } from "./user";

export class UserPreference {
  public user: User; // Object Reference

  constructor(user: User) {
      this.user = user;
  }
}