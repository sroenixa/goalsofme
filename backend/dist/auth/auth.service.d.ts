import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signinLocal(dto: AuthDto): Promise<{
        id: number;
        token: string;
        name: string;
        surname: string;
    }>;
    signUser(userId: number, email: string, name: string, surname: string, type: string): {
        id: number;
        token: string;
        name: string;
        surname: string;
    };
}
