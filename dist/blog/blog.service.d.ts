import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog';
import { CreateBlogDto } from './dtos/create-blog.dto';
export declare class BlogService {
    private blogRepo;
    private readonly userService;
    constructor(blogRepo: Repository<BlogEntity>, userService: UserService);
    getAllBlogs(): Promise<BlogEntity[]>;
    getBlogById(id: string): Promise<BlogEntity>;
    createBlog(userId: string, blog: CreateBlogDto): Promise<BlogEntity>;
    deleteBlog(id: string): Promise<any>;
}
