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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const typeorm_1 = require("typeorm");
const award_entity_1 = require("../award/award.entity");
const entry_entity_1 = require("../entry/entry.entity");
const user_entity_1 = require("../user/user.entity");
let Goal = class Goal {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Goal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Goal.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Goal.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Goal.prototype, "createdTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Goal.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.goals, { onDelete: 'SET NULL' }),
    __metadata("design:type", user_entity_1.User)
], Goal.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Goal.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => award_entity_1.Award, award => award.goal),
    __metadata("design:type", Array)
], Goal.prototype, "awards", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entry_entity_1.Entry, entry => entry.goal),
    __metadata("design:type", Array)
], Goal.prototype, "entries", void 0);
Goal = __decorate([
    (0, typeorm_1.Entity)({ name: "goal" })
], Goal);
exports.Goal = Goal;
//# sourceMappingURL=goal.entity.js.map