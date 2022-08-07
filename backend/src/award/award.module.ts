import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AwardController } from "./award.controller";
import { Award } from "./award.entity";
import { AwardService } from "./award.service";

@Module({
        imports: [TypeOrmModule.forFeature([Award])],
        controllers: [AwardController],
        providers: [AwardService]
})

export class AwardModule{}