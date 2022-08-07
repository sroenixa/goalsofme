import { Goal } from "./goal.entity";
import { GoalService } from "./goal.service";
export declare class GoalController {
    private goalService;
    constructor(goalService: GoalService);
    findAll(): Promise<Goal[]>;
    findOne(id: number): Promise<Goal>;
    findByUser(id: number): Promise<Goal[]>;
    create(createGoalDto: Goal): Promise<Goal>;
    update(id: number, createGoalDto: Goal, res: any): Promise<any>;
    delete(id: number, res: any): Promise<any>;
}
