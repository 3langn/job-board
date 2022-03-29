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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("../auth/dtos/auth.dto");
const blog_1 = require("./blog");
const blog_service_1 = require("./blog.service");
const create_blog_dto_1 = require("./dtos/create-blog.dto");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async getAllBlogs() {
        return await this.blogService.getAllBlogs();
    }
    async getBlogById(id) {
        return await this.blogService.getBlogById(id);
    }
    async createBlog(req, blog) {
        await this.blogService.createBlog(req.headers.authorization, blog);
        return {
            message: 'Blog created successfully',
        };
    }
    async deleteBlog(id) {
        await this.blogService.deleteBlog(id);
        return {
            message: 'Blog deleted successfully',
        };
    }
    async deleteAllBlogs() {
        await this.blogService.deleteAllBlogs();
        return {
            message: 'All blogs deleted successfully',
        };
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: blog_1.BlogEntity }),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getAllBlogs", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: blog_1.BlogEntity }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogById", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: auth_dto_1.MessageResponseDto }),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: auth_dto_1.MessageResponseDto }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.Delete)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteAllBlogs", null);
BlogController = __decorate([
    (0, swagger_1.ApiTags)('Blog'),
    (0, swagger_1.ApiSecurity)('Authorization'),
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map