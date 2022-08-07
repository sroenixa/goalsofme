import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        mail: string;
        surname: string;
    }>;
    findByMail(mail: string): Promise<User>;
    create(createUserDto: User): Promise<User>;
    update(id: number, createUserDto: User): Promise<void>;
    delete(id: number): Promise<void>;
}
