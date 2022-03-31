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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_1 = require("../company/company");
const user_1 = require("../user/user");
const typeorm_2 = require("typeorm");
const job_1 = require("./job");
let JobService = class JobService {
    constructor(companyRepo, jobRepo, userRepo) {
        this.companyRepo = companyRepo;
        this.jobRepo = jobRepo;
        this.userRepo = userRepo;
    }
    async getJobs() {
        return await this.jobRepo.find({ relations: ['company'] });
    }
    async getJob(id) {
        return await this.jobRepo.findOne(id);
    }
    async getCompanyJobs(id) {
        return await this.jobRepo.find({
            where: {
                company: {
                    id,
                },
            },
        });
    }
    async getAppliedJobs(user_id) {
        return await this.jobRepo
            .createQueryBuilder('job')
            .leftJoin('job.employments', 'user')
            .where('user.id = :user_id', { user_id })
            .getMany();
    }
    async getAppliedEmployments(company_id) {
        const jobs = await this.jobRepo
            .createQueryBuilder('job')
            .leftJoin('job.company', 'company')
            .where('company.id = :company_id', { company_id })
            .leftJoinAndSelect('job.employments', 'user')
            .getMany();
        return jobs;
    }
    async createJob(company_id, createJobDto) {
        const company = await this.companyRepo.findOne({
            where: { id: company_id },
        });
        const job = this.jobRepo.create(createJobDto);
        job.company = company;
        await this.jobRepo.save(job);
    }
    async applyJob(id, user_id) {
        const job = await this.jobRepo.findOne({ where: { id } });
        const user = await this.userRepo.findOne({ where: { id: user_id } });
        job.employments = job.employments || [];
        job.employments.push(user);
        return await this.jobRepo.save(job);
    }
    async deleteJob(id) {
        return await this.jobRepo.delete({ id });
    }
};
JobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_1.CompanyEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(job_1.JobEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map