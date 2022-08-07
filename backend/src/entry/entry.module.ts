import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntryController } from "./entry.controller";
import { Entry } from "./entry.entity";
import { EntryService } from "./entry.service";

@Module({
        imports: [TypeOrmModule.forFeature([Entry])],
        controllers: [EntryController],
        providers: [EntryService]
})

export class EntryModule{}