/// <reference types="multer" />
import { Request } from 'express';
import { UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(req: Request, dto: UpdateUserDto): Promise<import("./user").UserEntity>;
    getUserInfo(req: Request): Promise<import("./user").UserEntity>;
    uploadAvatar(req: Request, file: Express.Multer.File): Promise<import("./user").UserEntity>;
    uploadCV(req: Request, file: Express.Multer.File): Promise<import("./user").UserEntity>;
}
