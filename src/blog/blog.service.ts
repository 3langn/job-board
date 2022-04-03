import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog';
import { CreateBlogDto } from './dtos/create-blog.dto';

export class BlogService {
  constructor(
    @InjectRepository(BlogEntity) private blogRepo: Repository<BlogEntity>,
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
  ) {}

  factory(type: Role) {
    switch (type) {
      case Role.Company:
        return this.companyService;
      case Role.Candidate:
        return this.userService;
      default:
        break;
    }
  }

  async getAllBlogs(): Promise<BlogEntity[]> {
    return await this.blogRepo.find();
  }

  async getBlogById(id: string): Promise<BlogEntity> {
    return await this.blogRepo.findOne({ where: { id } });
  }

  async createBlog(
    userId: string,
    blog: CreateBlogDto,
    type: Role,
  ): Promise<BlogEntity> {
    const author = await this.factory(type).findById(userId);
    return await this.blogRepo.save(this.blogRepo.create({ author, ...blog }));
  }

  async deleteBlog(id: string): Promise<any> {
    const blog = await this.blogRepo.findOne({ where: { id } });

    if (!blog) {
      throw new NotFoundException('Blog not found.');
    }
    await this.blogRepo.delete(blog);
  }

  async deleteAllBlogs(): Promise<any> {
    await this.blogRepo.delete({});
  }
}
