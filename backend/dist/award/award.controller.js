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
exports.AwardController = void 0;
const common_1 = require("@nestjs/common");
const award_entity_1 = require("./award.entity");
const award_service_1 = require("./award.service");
let AwardController = class AwardController {
    constructor(awardService) {
        this.awardService = awardService;
    }
    async findOne(id) {
        const res = await this.awardService.findById(id);
        return res;
    }
    async create(createAwardDto) {
        const res = await this.awardService.create(createAwardDto);
        return res;
    }
    async update(id, createAwardDto) {
        const res = await this.awardService.update(id, createAwardDto);
        return res;
    }
    async delete(id, res) {
        const entry = await this.awardService.remove(id);
        if (!entry)
            throw new common_1.NotFoundException('Award does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Award has been deleted',
            deletedAward: id
        });
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [award_entity_1.Award]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, award_entity_1.Award]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "delete", null);
AwardController = __decorate([
    (0, common_1.Controller)('awards'),
    __metadata("design:paramtypes", [award_service_1.AwardService])
], AwardController);
exports.AwardController = AwardController;
//# sourceMappingURL=award.controller.js.map