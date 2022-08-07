import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Entry } from "./entry.entity";

@Injectable()
export class EntryService {
    constructor(
        @InjectRepository(Entry)
        private entryRepository: Repository<Entry>
    ) {}

    findById(entryId: number): Promise<Entry[]>{
        return this.entryRepository.find({
            where: {
                id: entryId
            }
        })
    }

    create(entry: Entry): Promise<Entry>{
        return this.entryRepository.save(entry);
    }

    async update(id: number, entry: Entry){
        await this.entryRepository.update(id,entry);
    }

    async remove(id: number):Promise<any>{
        const deletedEntry = this.entryRepository.delete(id);
        return deletedEntry; 
    }
}