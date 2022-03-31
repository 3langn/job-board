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
exports.CreateJobDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateJobDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Job title', description: 'Job title' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Job tags', description: 'Job tags' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Job type', description: 'Job type' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '500', description: 'Job exp' }),
    __metadata("design:type", Number)
], CreateJobDto.prototype, "exp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 100000, description: 'Job min salary' }),
    __metadata("design:type", Number)
], CreateJobDto.prototype, "min_salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 200000, description: 'Job max salary' }),
    __metadata("design:type", Number)
], CreateJobDto.prototype, "max_salary", void 0);
exports.CreateJobDto = CreateJobDto;
//# sourceMappingURL=job.dto.js.map