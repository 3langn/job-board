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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const upload_service_1 = require("../upload/upload.service");
const typeorm_2 = require("typeorm");
const enum_1 = require("./dtos/enum");
const education_1 = require("./education");
const employment_1 = require("./employment");
const project_1 = require("./project");
const resume_1 = require("./resume");
const skills_1 = require("./skills");
const user_1 = require("./user");
let UserService = class UserService {
    constructor(userRepo, eduRepo, skillRepo, employmentRepo, projectRepo, resumeRepo, uploadService) {
        this.userRepo = userRepo;
        this.eduRepo = eduRepo;
        this.skillRepo = skillRepo;
        this.employmentRepo = employmentRepo;
        this.projectRepo = projectRepo;
        this.resumeRepo = resumeRepo;
        this.uploadService = uploadService;
    }
    async findUserById(userId) {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found.');
        }
        return user;
    }
    async createUser(dto) {
        let user = await this.userRepo.findOne({ where: { email: dto.email } });
        if (user) {
            throw new common_1.BadRequestException('Email already exists.');
        }
        user = this.userRepo.create(dto);
        return this.userRepo.save(user);
    }
    async updateUser(userId, dto) {
        try {
            const user = await this.findUserById(userId);
            for (const f in dto) {
                if (dto[f] !== '') {
                    user[f] = dto[f];
                }
            }
            return this.userRepo.save(user);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async validateUser(username, pass) {
        const user = await this.userRepo.findOne({ where: { email: username } });
        if (user && user.password === pass) {
            return user;
        }
        throw new common_1.NotFoundException('Email not found.');
    }
    async getUserInfo(userId) {
        return await this.userRepo.findOne({ where: { id: userId } });
    }
    async getResume(userId) {
        const user = await this.findUserById(userId);
        let resume = await this.resumeRepo.findOne({
            where: { user: { id: user.id } },
        });
        if (!resume) {
            resume = this.resumeRepo.create({ user });
            await this.resumeRepo.save(resume);
        }
        return resume;
    }
    factoryRepo(type) {
        switch (type) {
            case enum_1.ResumeType.EDUCATION:
                return this.eduRepo;
            case enum_1.ResumeType.EMPLOYMENT:
                return this.employmentRepo;
            case enum_1.ResumeType.PROJECT:
                return this.projectRepo;
            case enum_1.ResumeType.SKILL:
                return this.skillRepo;
            default:
                return this.resumeRepo;
        }
    }
    async updateResume(userId, type, dto) {
        const resume = await this.getResume(userId);
        let factoryRepo = this.factoryRepo(type);
        if (type === enum_1.ResumeType.HEADLINE) {
            await factoryRepo.update({ id: resume.id }, { headline: dto.headline });
            return;
        }
        let temp;
        if (dto.id) {
            temp = await factoryRepo.findOne({ where: { id: dto.id } });
            for (const f in dto) {
                if (f !== 'id')
                    temp[f] = dto[f];
            }
        }
        else {
            temp = factoryRepo.create(Object.assign(Object.assign({}, dto), { resume }));
        }
        return factoryRepo.save(temp);
    }
    async deleteResume(userId, type, id) {
        const resume = await this.getResume(userId);
        let factoryRepo = this.factoryRepo(type);
        return factoryRepo.delete({ id, resume });
    }
    async uploadAvatar(userId, file) {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found.');
        }
        const avatar = await this.uploadService.uploadStream(file);
        user.avatar = avatar.secure_url;
        return this.userRepo.save(user);
    }
    async uploadCV(userId, file) {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found.');
        }
        const cv = await this.uploadService.uploadStream(file);
        user.curriculum_vitae = cv.secure_url;
        return this.userRepo.save(user);
    }
    async deleteAllUsers() {
        await this.userRepo.delete({});
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(education_1.EducationEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(skills_1.SkillsEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(employment_1.EmploymentEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(project_1.ProjectEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(resume_1.ResumeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        upload_service_1.UploadService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map