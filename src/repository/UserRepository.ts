import { Service } from "typedi";
import { Repository, MoreThanOrEqual } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
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

    findOne(id: number) {
        return this.InjectRepository.findOne(id);
    }

    findOverAge(age: number) {
        return this.InjectRepository.find({
            where: {
                age: MoreThanOrEqual(age)
            }
        })
    }

    findNonActiveUser() {
        return this.InjectRepository.find({
            where: {
                active: false
            }
        })
    }
}