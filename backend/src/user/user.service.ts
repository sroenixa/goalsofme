import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]>{
        return this.userRepository.find({relations: { goals: true}});
    }

    findById(userId: number): Promise<User>{
        return this.userRepository.findOne({
            where: {
                id: userId
            }
        })
    }

    findByUserMail(mail: string): Promise<User>{
        const user = this.userRepository.findOne(
            { where:
                { mail: mail }
            }
        );
        return user;
    }

    create(user: User): Promise<User>{
        return this.userRepository.save(user);
    }

    async update(id: number, user: User){
        await this.userRepository.update(id,user);
    }

    async remove(id: number):Promise<void>{
        await this.userRepository.delete(id);
    }
}