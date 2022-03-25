import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dtos/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/')
  async getAllBlogs() {
    return await this.blogService.getAllBlogs();
  }

  @Get('/:id')
  async getBlogById(@Param('id') id: string) {
    return await this.blogService.getBlogById(id);
  }

  @Post('/')
  async createBlog(@Req() req: Request, @Body() blog: CreateBlogDto) {
    return await this.blogService.createBlog(req.headers.authorization, blog);
  }
}
