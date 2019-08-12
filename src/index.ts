import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from 'typedi';
import { User } from "./entity/User";
import { UserRepository } from "./repository";

function lambda_hander() {
    useContainer(Container);
    createConnection().then(async connection => {
        const user = new User();
        user.firstName = "awaji";
        user.lastName = "daisuke";
        user.age = 27;
        user.active = true;
        const repository = Container.get(UserRepository);
        await repository.save(user)

        console.log('users');
        const users = await repository.findAll();
        console.log(users);

        console.log('users over 30');
        const usersOver30 = await repository.findOverAge(30);
        console.log(usersOver30);

        console.log('non active users');
        const nonActiveUser = await repository.findNonActiveUser();
        console.log(nonActiveUser);

    }).catch(error => console.log(error));
}

lambda_hander();