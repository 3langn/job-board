import { Request } from 'express';
import { BlogEntity } from './blog';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dtos/create-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllBlogs(): Promise<BlogEntity[]>;
    getBlogById(id: string): Promise<BlogEntity>;
    createBlog(req: Request, blog: CreateBlogDto): Promise<{
        message: string;
    }>;
    deleteBlog(id: string): Promise<{
        message: string;
    }>;
    deleteAllBlogs(): Promise<{
        message: string;
    }>;
}
