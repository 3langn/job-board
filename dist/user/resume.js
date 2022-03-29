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
exports.ResumeEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const education_1 = require("./education");
const employment_1 = require("./employment");
const project_1 = require("./project");
const skills_1 = require("./skills");
const user_1 = require("./user");
let ResumeEntity = class ResumeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ResumeEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ResumeEntity.prototype, "headline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => education_1.EducationEntity }),
    (0, typeorm_1.OneToMany)((type) => education_1.EducationEntity, (education) => education.resume, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ResumeEntity.prototype, "educations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => employment_1.EmploymentEntity }),
    (0, typeorm_1.OneToMany)((type) => employment_1.EmploymentEntity, (employment) => employment.resume, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ResumeEntity.prototype, "employments", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_1.UserEntity, (user) => user.resume),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_1.UserEntity)
], ResumeEntity.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => skills_1.SkillsEntity }),
    (0, typeorm_1.OneToMany)((type) => skills_1.SkillsEntity, (user) => user.resume, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ResumeEntity.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => project_1.ProjectEntity }),
    (0, typeorm_1.OneToMany)((type) => project_1.ProjectEntity, (project) => project.resume, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ResumeEntity.prototype, "projects", void 0);
ResumeEntity = __decorate([
    (0, typeorm_1.Entity)('resumes')
], ResumeEntity);
exports.ResumeEntity = ResumeEntity;
//# sourceMappingURL=resume.js.map