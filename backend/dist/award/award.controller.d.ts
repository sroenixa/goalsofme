import { Award } from "./award.entity";
import { AwardService } from "./award.service";
export declare class AwardController {
    private awardService;
    constructor(awardService: AwardService);
    findOne(id: number): Promise<Award[]>;
    create(createAwardDto: Award): Promise<Award>;
    update(id: number, createAwardDto: Award): Promise<void>;
    delete(id: number, res: any): Promise<any>;
}
