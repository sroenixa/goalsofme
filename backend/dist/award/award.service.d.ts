import { Repository } from "typeorm";
import { Award } from "./award.entity";
export declare class AwardService {
    private awardRepository;
    constructor(awardRepository: Repository<Award>);
    findById(awardId: number): Promise<Award[]>;
    create(award: Award): Promise<Award>;
    update(id: number, award: Award): Promise<void>;
    remove(id: number): Promise<any>;
}
