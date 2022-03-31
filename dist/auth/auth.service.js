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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const enum_1 = require("../common/enum");
const company_service_1 = require("../company/company.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, companyService) {
        this.userService = userService;
        this.companyService = companyService;
    }
    async login(email, password, role) {
        if (role === enum_1.Role.Candidate) {
            return await this.userService.validateUser(email, password);
        }
        else if (role === enum_1.Role.Company) {
            return await this.companyService.validateCompany(email, password);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        company_service_1.CompanyService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map