import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { MessageResponseDto } from 'src/auth/dtos/auth.dto';
import { Role } from 'src/common/enum';
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
  async createBlog(
    @Req() req: Request,
    @Body() blog: CreateBlogDto,
    @Query('type') type: Role,
  ) {
    await this.blogService.createBlog(req.headers.authorization, blog, type);
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

  @Delete('/all')
  async deleteAllBlogs() {
    await this.blogService.deleteAllBlogs();
    return {
      message: 'All blogs deleted successfully',
    };
  }
}
