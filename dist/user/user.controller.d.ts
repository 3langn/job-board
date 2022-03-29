/// <reference types="multer" />
import { Request } from 'express';
import { ResumeType } from './dtos/enum';
import { UpdateUserDto } from './dtos/user.dto';
import { ResumeEntity } from './resume';
import { SkillsEntity } from './skills';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(req: Request, dto: UpdateUserDto): Promise<import("./user").UserEntity>;
    getUserInfo(req: Request): Promise<import("./user").UserEntity>;
    getResume(req: Request): Promise<ResumeEntity>;
    updateResume(type: ResumeType, req: Request, dto: ResumeEntity[]): Promise<SkillsEntity[]>;
    uploadAvatar(req: Request, file: Express.Multer.File): Promise<import("./user").UserEntity>;
    uploadCV(req: Request, file: Express.Multer.File): Promise<import("./user").UserEntity>;
}
