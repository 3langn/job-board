import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog';
import { CreateBlogDto } from './dtos/create-blog.dto';

export class BlogService {
  constructor(
    @InjectRepository(BlogEntity) private blogRepo: Repository<BlogEntity>,
    private readonly userService: UserService,
  ) {}

  async getAllBlogs(): Promise<BlogEntity[]> {
    return await this.blogRepo.find();
  }

  async getBlogById(id: string): Promise<BlogEntity> {
    return await this.blogRepo.findOne({ where: { id } });
  }

  async createBlog(userId: string, blog: CreateBlogDto): Promise<BlogEntity> {
    const user = await this.userService.findUserById(userId);
    return await this.blogRepo.save(
      this.blogRepo.create({ author: user, ...blog }),
    );
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
