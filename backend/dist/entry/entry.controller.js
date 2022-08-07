"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryController = void 0;
const common_1 = require("@nestjs/common");
const entry_entity_1 = require("./entry.entity");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    constructor(entryService) {
        this.entryService = entryService;
    }
    async findOne(id) {
        const res = await this.entryService.findById(id);
        return res;
    }
    async create(createEntryDto) {
        const res = await this.entryService.create(createEntryDto);
        return res;
    }
    async update(id, createEntryDto) {
        const res = await this.entryService.update(id, createEntryDto);
        return res;
    }
    async delete(id, res) {
        const entry = await this.entryService.remove(id);
        if (!entry)
            throw new common_1.NotFoundException('Entry does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Entry has been deleted',
            deletedEntry: id
        });
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entry_entity_1.Entry]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, entry_entity_1.Entry]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "delete", null);
EntryController = __decorate([
    (0, common_1.Controller)('entries'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
exports.EntryController = EntryController;
//# sourceMappingURL=entry.controller.js.map