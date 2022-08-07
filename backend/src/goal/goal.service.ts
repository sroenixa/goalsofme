import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Goal } from "./goal.entity";

@Injectable()
export class GoalService {
    constructor(
        @InjectRepository(Goal)
        private goalRepository: Repository<Goal>
    ) {}

    findAll(): Promise<Goal[]>{
        return this.goalRepository.find({relations: { awards: true, entries: true}});
    }

    findById(goalId: number): Promise<Goal>{
        return this.goalRepository.findOne({
            where: {
                id: goalId
            },
            relations: { awards: true, entries: true}
        })
    }

    findByUserId(userId: number): Promise<Goal[]>{
        return this.goalRepository.find({
            where: {
                userId: userId
            },
            relations: { awards: true, entries: true}
        })
    }

    create(goal: Goal): Promise<Goal>{
        return this.goalRepository.save(goal);
    }

    async update(id: number, goal: Goal):Promise<any>{
        const updatedGoal =  this.goalRepository.update(id,goal);
        return updatedGoal
    }

    async remove(id: number):Promise<any>{
        const deletedGoal = this.goalRepository.delete(id);
        return deletedGoal;
    }
}