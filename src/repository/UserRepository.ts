import { Service } from "typedi";
import { Connection, Repository } from "typeorm";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../entity";

@Service()
export class UserRepository {

    constructor(@InjectRepository(User) private InjectRepository: Repository<User>) { }

    save(user: User) {
        return this.InjectRepository.save(user);
    }

    findAll() {
        return this.InjectRepository.find();
    }
}