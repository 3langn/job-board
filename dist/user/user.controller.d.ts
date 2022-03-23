import { UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(id: string, dto: UpdateUserDto): Promise<import("./user").UserEntity>;
}
