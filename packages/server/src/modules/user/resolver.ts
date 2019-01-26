import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User } from "../../entity/User";
import { getConnection } from "typeorm";
import * as argon from "argon2";
import { UserCredentials, UserInput } from "./user-input";

@Resolver(User)
export class UserResolver {
  constructor() {}

  @Query(() => User, {})
  async findUser(@Arg("id") id: string) {
    const user = await User.findOne(id);
    if (user === undefined) {
      throw new Error("User Not Found");
    }
    return user;
  }

  @Query(() => [User])
  async findAllUsers() {
    const users = await getConnection()
      .getRepository(User)
      .createQueryBuilder("users")
      .getMany();
    return users;
  }

  @Mutation(() => User)
  async register(@Arg("userInfo") userInput: UserInput): Promise<User> {
    const hashedPassword = await argon.hash(userInput.password);
    const newUser = User.create({
      username: userInput.username,
      email: userInput.email,
      password: hashedPassword
    });
    const response = newUser.save();
    return response;
  }

  @Mutation(() => User)
  async login(@Arg("userInfo") userCredentials: UserCredentials): Promise<any> {
    const user = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .where("email = :email", {
        email: userCredentials.usernameOrEmail
      })
      .orWhere("username = :username", {
        username: userCredentials.usernameOrEmail
      })
      .getOne();

    // await User.findOne({
    //   where: { email: userCredentials.usernameOrEmail }
    // });
    if (!user) {
      return null;
    }
    const valid = await argon.verify(user.password, userCredentials.password);

    console.log("valid", valid);

    if (!valid) {
      return null;
    }

    // TODO : set currentUserId to session
    // req.session.userId = user.id;

    return user;
  }
}
