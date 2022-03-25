/// <reference types="multer" />
import { RegisterDto } from 'src/auth/dtos/auth.dto';
import { UploadService } from 'src/upload/upload.service';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/user.dto';
import { UserEntity } from './user';
export declare class UserService {
    private userRepo;
    private readonly uploadService;
    constructor(userRepo: Repository<UserEntity>, uploadService: UploadService);
    findUserById(userId: string): Promise<UserEntity>;
    createUser(dto: RegisterDto): Promise<UserEntity>;
    updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity>;
    validateUser(username: string, pass: string): Promise<UserEntity>;
    getUserInfo(userId: string): Promise<UserEntity>;
    uploadAvatar(userId: string, file: Express.Multer.File): Promise<UserEntity>;
    uploadCV(userId: string, file: Express.Multer.File): Promise<UserEntity>;
}
