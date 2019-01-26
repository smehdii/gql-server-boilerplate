import { User } from "../../entity/User";
import { InputType, Field } from "type-graphql";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UserCredentials implements Partial<User> {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
