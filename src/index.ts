import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from 'typedi';
import { User } from "./entity/User";
import { UserRepository } from "./repository/UserRepository";

useContainer(Container);
createConnection().then(async connection => {

    const user = new User();
    user.firstName = "awaji";
    user.lastName = "daisuke";
    user.age = 27;
    const repository = Container.get(UserRepository);
    await repository.save(user)

    const users = await repository.findAll();
    console.log(users);

}).catch(error => console.log(error));
