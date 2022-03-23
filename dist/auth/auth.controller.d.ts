import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dtos/auth.dto';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<import("../user/user").UserEntity>;
}
