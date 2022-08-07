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
exports.GoalController = void 0;
const common_1 = require("@nestjs/common");
const goal_entity_1 = require("./goal.entity");
const goal_service_1 = require("./goal.service");
const jwt_guard_guard_1 = require("../utils/guard/jwt-guard.guard");
let GoalController = class GoalController {
    constructor(goalService) {
        this.goalService = goalService;
    }
    async findAll() {
        const res = await this.goalService.findAll();
        return res;
    }
    async findOne(id) {
        const res = await this.goalService.findById(id);
        return res;
    }
    async findByUser(id) {
        const res = await this.goalService.findByUserId(id);
        return res;
    }
    async create(createGoalDto) {
        const res = await this.goalService.create(createGoalDto);
        res.entries = [];
        res.awards = [];
        return res;
    }
    async update(id, createGoalDto, res) {
        const goal = await this.goalService.update(id, createGoalDto);
        if (!goal)
            throw new common_1.NotFoundException('Entry does not update');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Goal has been updated',
            goal: createGoalDto
        });
    }
    async delete(id, res) {
        const goal = await this.goalService.remove(id);
        if (!goal)
            throw new common_1.NotFoundException('Entry does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Goal has been deleted',
            deletedGoal: id
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goal_entity_1.Goal]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, goal_entity_1.Goal, Object]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "delete", null);
GoalController = __decorate([
    (0, common_1.Controller)('goals'),
    __metadata("design:paramtypes", [goal_service_1.GoalService])
], GoalController);
exports.GoalController = GoalController;
//# sourceMappingURL=goal.controller.js.map