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
exports.MessageResponseDto = exports.LoginDto = exports.RegisterCompanyDto = exports.RegisterCandidateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RegisterCandidateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Username', description: 'Username' }),
    __metadata("design:type", String)
], RegisterCandidateDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'myacount@email.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCandidateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'password', description: 'Password' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterCandidateDto.prototype, "password", void 0);
exports.RegisterCandidateDto = RegisterCandidateDto;
class RegisterCompanyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Google', description: 'company name' }),
    __metadata("design:type", String)
], RegisterCompanyDto.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'google@email.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCompanyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'password', description: 'Password' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterCompanyDto.prototype, "password", void 0);
exports.RegisterCompanyDto = RegisterCompanyDto;
class LoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'myacount@email.com', description: 'Email' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'password', description: 'Password' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
class MessageResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Success', description: 'Success' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "success", void 0);
exports.MessageResponseDto = MessageResponseDto;
//# sourceMappingURL=auth.dto.js.map