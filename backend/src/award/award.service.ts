import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Award } from "./award.entity";

@Injectable()
export class AwardService {
    constructor(
        @InjectRepository(Award)
        private awardRepository: Repository<Award>
    ) {}

    findById(awardId: number): Promise<Award[]>{
        return this.awardRepository.find({
            where: {
                id: awardId
            }
        })
    }

    create(award: Award): Promise<Award>{
        return this.awardRepository.save(award);
    }

    async update(id: number, award: Award){
        await this.awardRepository.update(id,award);
    }

    async remove(id: number):Promise<any>{
        const deletedAward = this.awardRepository.delete(id);
        return deletedAward; 
    }
}