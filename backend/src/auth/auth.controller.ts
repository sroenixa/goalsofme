import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('login')
    async login(@Body() dto: AuthDto) {
      return this.authService.signinLocal(dto);
    }


}