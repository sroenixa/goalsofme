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
exports.AwardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const award_entity_1 = require("./award.entity");
let AwardService = class AwardService {
    constructor(awardRepository) {
        this.awardRepository = awardRepository;
    }
    findById(awardId) {
        return this.awardRepository.find({
            where: {
                id: awardId
            }
        });
    }
    create(award) {
        return this.awardRepository.save(award);
    }
    async update(id, award) {
        await this.awardRepository.update(id, award);
    }
    async remove(id) {
        const deletedAward = this.awardRepository.delete(id);
        return deletedAward;
    }
};
AwardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(award_entity_1.Award)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AwardService);
exports.AwardService = AwardService;
//# sourceMappingURL=award.service.js.map