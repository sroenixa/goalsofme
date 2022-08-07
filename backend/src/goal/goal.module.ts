import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GoalController } from "./goal.controller";
import { Goal } from "./goal.entity";
import { GoalService } from "./goal.service";

@Module({
        imports: [TypeOrmModule.forFeature([Goal])],
        controllers: [GoalController],
        providers: [GoalService]
})

export class GoalModule{}