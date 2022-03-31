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
exports.JobEntity = void 0;
const user_1 = require("../user/user");
const typeorm_1 = require("typeorm");
const company_1 = require("../company/company");
let JobEntity = class JobEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], JobEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobEntity.prototype, "exp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobEntity.prototype, "min_salary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], JobEntity.prototype, "max_salary", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], JobEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], JobEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_1.CompanyEntity, (company) => company.jobs),
    __metadata("design:type", company_1.CompanyEntity)
], JobEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.UserEntity, (user) => user.jobs),
    __metadata("design:type", Array)
], JobEntity.prototype, "employments", void 0);
JobEntity = __decorate([
    (0, typeorm_1.Entity)('jobs')
], JobEntity);
exports.JobEntity = JobEntity;
//# sourceMappingURL=job.js.map