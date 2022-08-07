import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put,Res,UseGuards } from "@nestjs/common";
import { Goal } from "./goal.entity";
import { GoalService } from "./goal.service";
import { JwtAuthGuard } from "src/utils/guard/jwt-guard.guard";

@Controller('goals')
export class GoalController{
    constructor(private goalService: GoalService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(){
        const res = await this.goalService.findAll();
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number){
        const res = await this.goalService.findById(id);
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Get('user/:userId')
    async findByUser(@Param('userId') id: number){
        const res = await this.goalService.findByUserId(id);
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createGoalDto: Goal){
        const res = await this.goalService.create(createGoalDto);
        res.entries = [];
        res.awards = [];
        return res;
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number,@Body() createGoalDto: Goal,@Res() res){
        const goal = await this.goalService.update(id,createGoalDto);
        if (!goal) throw new NotFoundException('Entry does not update');
        return res.status(HttpStatus.OK).json({
            message: 'Goal has been updated',
            goal: createGoalDto
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@Body() id: number,@Res() res){
        const goal = await this.goalService.remove(id);
        if (!goal) throw new NotFoundException('Entry does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Goal has been deleted',
            deletedGoal: id
        })
    }
}