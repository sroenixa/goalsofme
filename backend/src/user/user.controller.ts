import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "src/utils/guard/jwt-guard.guard";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(){
        const res = await this.userService.findAll();
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number){
        const res = await this.userService.findById(id);
        const returnRes = {id:0,name:"",mail:"",surname:""};
        returnRes.id = res.id;
        returnRes.name = res.name;
        returnRes.surname = res.surname;
        returnRes.mail = res.mail;
        return returnRes;
    }

    @UseGuards(JwtAuthGuard)
    @Post('deneme')
    async findByMail(@Body() mail: string){
        const res = await this.userService.findByUserMail(mail);
        return res;
    }

    @Post()
    async create(@Body() createUserDto: User){
        const res = await this.userService.create(createUserDto);
        res.goals = [];
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number,@Body() createUserDto: User){
        const res = await this.userService.update(id,createUserDto);
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@Body() id: number){
        const res = await this.userService.remove(id);
        return res;
    }
    
}