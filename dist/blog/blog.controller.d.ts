import { Request } from 'express';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dtos/create-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllBlogs(): Promise<import("./blog").BlogEntity[]>;
    getBlogById(id: string): Promise<import("./blog").BlogEntity>;
    createBlog(req: Request, blog: CreateBlogDto): Promise<import("./blog").BlogEntity>;
}
