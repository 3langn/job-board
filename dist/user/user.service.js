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
const user_1 = require("./user");
let UserService = class UserService {
    constructor(userRepo, uploadService) {
        this.userRepo = userRepo;
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
            const user = await this.userRepo.findOne({ where: { id: userId } });
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
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        upload_service_1.UploadService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map