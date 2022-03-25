import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { MessageResponseDto } from 'src/auth/dtos/auth.dto';
import { BlogEntity } from './blog';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dtos/create-blog.dto';

@ApiTags('Blog')
@ApiSecurity('Authorization')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiResponse({ type: BlogEntity })
  @Get('/')
  async getAllBlogs() {
    return await this.blogService.getAllBlogs();
  }

  @ApiResponse({ type: BlogEntity })
  @Get('/:id')
  async getBlogById(@Param('id') id: string) {
    return await this.blogService.getBlogById(id);
  }

  @ApiResponse({ type: MessageResponseDto })
  @Post('/')
  async createBlog(@Req() req: Request, @Body() blog: CreateBlogDto) {
    await this.blogService.createBlog(req.headers.authorization, blog);
    return {
      message: 'Blog created successfully',
    };
  }

  @ApiResponse({ type: MessageResponseDto })
  @Delete('/:id')
  async deleteBlog(@Param('id') id: string) {
    await this.blogService.deleteBlog(id);
    return {
      message: 'Blog deleted successfully',
    };
  }
}
