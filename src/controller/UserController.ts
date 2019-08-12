import { UserRepository } from "../repository";
import { User } from "../entity";
import { Container } from 'typedi';

export class UserController {

    constructor() {

    }


    async users() {
        const repository = Container.get(UserRepository);
        console.log('users');
        const users = await repository.findAll();
        console.log(users);
    }
}