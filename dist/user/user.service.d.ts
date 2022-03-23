import { RegisterDto } from 'src/auth/dtos/auth.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/user.dto';
import { UserEntity } from './user';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    createUser(dto: RegisterDto): Promise<UserEntity>;
    updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity>;
    validateUser(username: string, pass: string): Promise<UserEntity>;
}
