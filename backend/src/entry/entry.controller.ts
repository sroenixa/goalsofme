import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from "@nestjs/common";
import { Entry } from "./entry.entity";
import { EntryService } from "./entry.service";

@Controller('entries')
export class EntryController{
    constructor(private entryService: EntryService){}


    @Get(':id')
    async findOne(@Param('id') id: number){
        const res = await this.entryService.findById(id);
        return res;
    }

    @Post()
    async create(@Body() createEntryDto: Entry){
        const res = await this.entryService.create(createEntryDto);
        return res;
    }

    @Put(':id')
    async update(@Param() id: number,@Body() createEntryDto: Entry){
        const res = await this.entryService.update(id,createEntryDto);
        return res;
    }

    @Delete()
    async delete(@Body() id: number, @Res() res){
        const entry = await this.entryService.remove(id);
        if (!entry) throw new NotFoundException('Entry does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Entry has been deleted',
            deletedEntry: id
        })
    }
}