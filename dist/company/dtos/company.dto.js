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
exports.UpdateCompanyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateCompanyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Google', description: 'company name' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'google@gmail.com' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1234567' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date() }),
    __metadata("design:type", Date)
], UpdateCompanyDto.prototype, "founded_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Ameria' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Best company' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '01111111111' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Los Angeles' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '123' }),
    __metadata("design:type", Number)
], UpdateCompanyDto.prototype, "zip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Los Angeles' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'abc' }),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "avatar", void 0);
exports.UpdateCompanyDto = UpdateCompanyDto;
//# sourceMappingURL=company.dto.js.map