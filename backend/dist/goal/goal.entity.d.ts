import { Award } from "../award/award.entity";
import { Entry } from "../entry/entry.entity";
import { User } from "../user/user.entity";
export declare class Goal {
    id: number;
    name: string;
    description: string;
    createdTime: string;
    endTime: string;
    user: User;
    userId: number;
    awards: Award[];
    entries: Entry[];
}
