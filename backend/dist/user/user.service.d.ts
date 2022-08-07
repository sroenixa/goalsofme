import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(userId: number): Promise<User>;
    findByUserMail(mail: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<void>;
    remove(id: number): Promise<void>;
}
