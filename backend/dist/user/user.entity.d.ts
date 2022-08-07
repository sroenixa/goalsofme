import { Goal } from "../goal/goal.entity";
export declare class User {
    id: number;
    name: string;
    surname: string;
    mail: string;
    password: string;
    goals: Goal[];
}
