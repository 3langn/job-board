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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const job_dto_1 = require("./dtos/job.dto");
const job_service_1 = require("./job.service");
let JobController = class JobController {
    constructor(jobSerivce) {
        this.jobSerivce = jobSerivce;
    }
    async getJobs() {
        return await this.jobSerivce.getJobs();
    }
    async getAppliedJobs(req) {
        return await this.jobSerivce.getAppliedJobs(req.headers.authorization);
    }
    async getAppliedEmployments(req) {
        return await this.jobSerivce.getAppliedEmployments(req.headers.authorization);
    }
    async getJob(id) {
        return await this.jobSerivce.getJob(id);
    }
    async getCompanyJobs(id) {
        return await this.jobSerivce.getCompanyJobs(id);
    }
    async createJob(req, createJobDto) {
        return await this.jobSerivce.createJob(req.headers.authorization, createJobDto);
    }
    async deleteJob(id) {
        return await this.jobSerivce.deleteJob(id);
    }
    async applyJob(id, req) {
        return await this.jobSerivce.applyJob(id, req.headers.authorization);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobs", null);
__decorate([
    (0, common_1.Get)('/applied_jobs'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getAppliedJobs", null);
__decorate([
    (0, common_1.Get)('/applied_employments'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getAppliedEmployments", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJob", null);
__decorate([
    (0, common_1.Get)('/company/:company_id'),
    __param(0, (0, common_1.Param)('company_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getCompanyJobs", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, job_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "createJob", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "deleteJob", null);
__decorate([
    (0, common_1.Post)('/apply/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "applyJob", null);
JobController = __decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, swagger_1.ApiSecurity)('Authorization'),
    (0, common_1.Controller)('job'),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=job.controller.js.map