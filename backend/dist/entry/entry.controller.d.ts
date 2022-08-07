import { Entry } from "./entry.entity";
import { EntryService } from "./entry.service";
export declare class EntryController {
    private entryService;
    constructor(entryService: EntryService);
    findOne(id: number): Promise<Entry[]>;
    create(createEntryDto: Entry): Promise<Entry>;
    update(id: number, createEntryDto: Entry): Promise<void>;
    delete(id: number, res: any): Promise<any>;
}
