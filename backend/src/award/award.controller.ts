import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from "@nestjs/common";
import { Award } from "./award.entity";
import { AwardService } from "./award.service";

@Controller('awards')
export class AwardController{
    constructor(private awardService: AwardService){}


    @Get(':id')
    async findOne(@Param('id') id: number){
        const res = await this.awardService.findById(id);
        return res;
    }

    @Post()
    async create(@Body() createAwardDto: Award){
        const res = await this.awardService.create(createAwardDto);
        return res;
    }

    @Put(':id')
    async update(@Param() id: number,@Body() createAwardDto: Award){
        const res = await this.awardService.update(id,createAwardDto);
        return res;
    }

    @Delete()
    async delete(@Body() id: number,@Res() res){
        const entry = await this.awardService.remove(id);
        if (!entry) throw new NotFoundException('Award does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Award has been deleted',
            deletedAward: id
        })
    }
}