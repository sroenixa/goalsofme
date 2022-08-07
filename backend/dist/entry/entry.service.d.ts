import { Repository } from "typeorm";
import { Entry } from "./entry.entity";
export declare class EntryService {
    private entryRepository;
    constructor(entryRepository: Repository<Entry>);
    findById(entryId: number): Promise<Entry[]>;
    create(entry: Entry): Promise<Entry>;
    update(id: number, entry: Entry): Promise<void>;
    remove(id: number): Promise<any>;
}
