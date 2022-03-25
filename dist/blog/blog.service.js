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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const blog_1 = require("./blog");
let BlogService = class BlogService {
    constructor(blogRepo, userService) {
        this.blogRepo = blogRepo;
        this.userService = userService;
    }
    async getAllBlogs() {
        return await this.blogRepo.find();
    }
    async getBlogById(id) {
        return await this.blogRepo.findOne({ where: { id } });
    }
    async createBlog(userId, blog) {
        const user = await this.userService.findUserById(userId);
        return await this.blogRepo.save(this.blogRepo.create(Object.assign({ author: user }, blog)));
    }
    async deleteBlog(id) {
        const blog = await this.blogRepo.findOne({ where: { id } });
        if (!blog) {
            throw new common_1.NotFoundException('Blog not found.');
        }
        await this.blogRepo.delete(blog);
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_1.BlogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map