import { Goal } from "../goal/goal.entity";
export declare class Award {
    id: number;
    name: string;
    time: string;
    goalId: number;
    goal: Goal;
}
