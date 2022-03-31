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
exports.CompanyEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const enum_1 = require("../common/enum");
const typeorm_1 = require("typeorm");
const job_1 = require("../job/job");
let CompanyEntity = class CompanyEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ enum: enum_1.Role, default: enum_1.Role.Company }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyEntity.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], CompanyEntity.prototype, "founded_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "zip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_1.JobEntity, (job) => job.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "jobs", void 0);
CompanyEntity = __decorate([
    (0, typeorm_1.Entity)('companies')
], CompanyEntity);
exports.CompanyEntity = CompanyEntity;
//# sourceMappingURL=company.js.map