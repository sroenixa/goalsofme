import { Goal } from "../goal/goal.entity";
export declare class Entry {
    id: number;
    status: boolean;
    goalId: number;
    time: string;
    goal: Goal;
}
