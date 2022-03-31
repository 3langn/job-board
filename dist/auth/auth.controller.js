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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enum_1 = require("../common/enum");
const company_service_1 = require("../company/company.service");
const user_1 = require("../user/user");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dtos/auth.dto");
let AuthController = class AuthController {
    constructor(userService, companyService, authService) {
        this.userService = userService;
        this.companyService = companyService;
        this.authService = authService;
    }
    async register(dto) {
        await this.userService.createUser(dto);
        return {
            message: 'Register successfully.',
        };
    }
    async registerCompany(dto) {
        await this.companyService.createCompany(dto);
        return {
            message: 'Register successfully.',
        };
    }
    async login(dto, role) {
        return await this.authService.login(dto.email, dto.password, role);
    }
    async deleteAllUsers() {
        await this.userService.deleteAllUsers();
        return {
            message: 'All users deleted successfully',
        };
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Ok', type: auth_dto_1.MessageResponseDto }),
    (0, common_1.Post)('/register/candidate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterCandidateDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Ok', type: auth_dto_1.MessageResponseDto }),
    (0, common_1.Post)('/register/company'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterCompanyDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerCompany", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Ok', type: user_1.UserEntity }),
    (0, swagger_1.ApiQuery)({
        name: 'role',
        required: true,
        enum: enum_1.Role,
        description: 'Role',
    }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteAllUsers", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        company_service_1.CompanyService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map