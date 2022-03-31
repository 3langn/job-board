/// <reference types="multer" />
import { RegisterCandidateDto } from 'src/auth/dtos/auth.dto';
import { UploadService } from 'src/upload/upload.service';
import { Repository } from 'typeorm';
import { ResumeType } from './dtos/enum';
import { UpdateUserDto } from './dtos/user.dto';
import { EducationEntity } from './education';
import { EmploymentEntity } from './employment';
import { ProjectEntity } from './project';
import { ResumeEntity } from './resume';
import { SkillsEntity } from './skills';
import { UserEntity } from './user';
export declare class UserService {
    private userRepo;
    private eduRepo;
    private skillRepo;
    private employmentRepo;
    private projectRepo;
    private resumeRepo;
    private readonly uploadService;
    constructor(userRepo: Repository<UserEntity>, eduRepo: Repository<EducationEntity>, skillRepo: Repository<SkillsEntity>, employmentRepo: Repository<EmploymentEntity>, projectRepo: Repository<ProjectEntity>, resumeRepo: Repository<ResumeEntity>, uploadService: UploadService);
    findUserById(userId: string): Promise<UserEntity>;
    createUser(dto: RegisterCandidateDto): Promise<UserEntity>;
    updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity>;
    validateUser(username: string, pass: string): Promise<UserEntity>;
    getUserInfo(userId: string): Promise<UserEntity>;
    getResume(userId: string): Promise<ResumeEntity>;
    factoryRepo(type: ResumeType): Repository<any>;
    updateResume(userId: string, type: ResumeType, dto: any): Promise<any>;
    deleteResume(userId: string, type: ResumeType, id: string): Promise<any>;
    uploadAvatar(userId: string, file: Express.Multer.File): Promise<UserEntity>;
    uploadCV(userId: string, file: Express.Multer.File): Promise<UserEntity>;
    deleteAllUsers(): Promise<void>;
}
