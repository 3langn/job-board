import { UserEntity } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dtos/auth.dto';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<UserEntity>;
    deleteAllUsers(): Promise<{
        message: string;
    }>;
}
