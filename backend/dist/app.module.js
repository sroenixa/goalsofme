"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const award_entity_1 = require("./award/award.entity");
const award_module_1 = require("./award/award.module");
const entry_entity_1 = require("./entry/entry.entity");
const entry_module_1 = require("./entry/entry.module");
const goal_entity_1 = require("./goal/goal.entity");
const goal_module_1 = require("./goal/goal.module");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Password@123',
                database: 'mydb',
                entities: [user_entity_1.User, goal_entity_1.Goal, award_entity_1.Award, entry_entity_1.Entry],
                synchronize: true,
            }), user_module_1.UserModule, goal_module_1.GoalModule, entry_module_1.EntryModule, award_module_1.AwardModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map