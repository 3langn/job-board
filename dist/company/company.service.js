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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const upload_service_1 = require("../upload/upload.service");
const typeorm_2 = require("typeorm");
const company_1 = require("./company");
let CompanyService = class CompanyService {
    constructor(companyRepo, uploadService) {
        this.companyRepo = companyRepo;
        this.uploadService = uploadService;
    }
    async createCompany(dto) {
        let company = await this.companyRepo.findOne({
            where: { email: dto.email },
        });
        if (company) {
            throw new common_1.BadRequestException('Email already exists.');
        }
        company = this.companyRepo.create(dto);
        return this.companyRepo.save(company);
    }
    async validateCompany(email, password) {
        const company = await this.companyRepo.findOne({
            where: { email, password },
        });
        if (!company) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        return company;
    }
    async findCompanyById(id) {
        const company = await this.companyRepo.findOne({ where: { id } });
        if (!company) {
            throw new common_1.BadRequestException('Company not found.');
        }
        return company;
    }
    async updateCompany(id, data) {
        return await this.companyRepo.update(id, data);
    }
    async uploadAvatar(company_id, file) {
        const company = await this.findCompanyById(company_id);
        const avatar = await this.uploadService.uploadStream(file);
        company.avatar = avatar.secure_url;
        return this.companyRepo.save(company);
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        upload_service_1.UploadService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map