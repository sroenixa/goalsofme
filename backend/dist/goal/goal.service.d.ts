import { Repository } from "typeorm";
import { Goal } from "./goal.entity";
export declare class GoalService {
    private goalRepository;
    constructor(goalRepository: Repository<Goal>);
    findAll(): Promise<Goal[]>;
    findById(goalId: number): Promise<Goal>;
    findByUserId(userId: number): Promise<Goal[]>;
    create(goal: Goal): Promise<Goal>;
    update(id: number, goal: Goal): Promise<any>;
    remove(id: number): Promise<any>;
}
