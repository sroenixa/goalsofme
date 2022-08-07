import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  async signinLocal(dto: AuthDto) {
    const user = await this.userService.findByUserMail(dto.mail);
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return this.signUser(user.id, user.mail,user.name,user.surname, 'user');
  }

  signUser(userId: number, email: string, name: string,surname: string, type: string) {
    const response = {id:0,token:"",name:"",surname:""}
    response.token = this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
    response.id = userId;
    response.name = name;
    response.surname = surname;
    return response;
  }
}