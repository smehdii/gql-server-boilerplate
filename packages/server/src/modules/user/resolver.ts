import { Resolver, Query } from "type-graphql";
import { User } from "../../entity/User";

@Resolver(User)
export class UserResolver {
  constructor() {}

  @Query(() => User, {})
  async me() {
    return User.findOne({ id: "something" });
  }
}
