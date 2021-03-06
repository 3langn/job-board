import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCandidateDto } from 'src/auth/dtos/auth.dto';
import { Role } from 'src/common/enum';
import { UploadService } from 'src/upload/upload.service';
import { EntitySchema, Repository } from 'typeorm';
import { ResumeType } from './dtos/enum';
import { SkillsDto } from './dtos/skill.dto';
import { UpdateUserDto } from './dtos/user.dto';
import { EducationEntity } from './education';
import { EmploymentEntity } from './employment';
import { ProjectEntity } from './project';
import { ResumeEntity } from './resume';
import { SkillsEntity } from './skills';
import { UserEntity } from './user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    @InjectRepository(EducationEntity)
    private eduRepo: Repository<EducationEntity>,
    @InjectRepository(SkillsEntity) private skillRepo: Repository<SkillsEntity>,
    @InjectRepository(EmploymentEntity)
    private employmentRepo: Repository<EmploymentEntity>,
    @InjectRepository(ProjectEntity)
    private projectRepo: Repository<ProjectEntity>,
    @InjectRepository(ResumeEntity)
    private resumeRepo: Repository<ResumeEntity>,
    private readonly uploadService: UploadService,
  ) {}

  async findById(userId: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async createEntity(dto: RegisterCandidateDto): Promise<UserEntity> {
    let user = await this.userRepo.findOne({ where: { email: dto.email } });

    if (user) {
      throw new BadRequestException('Email already exists.');
    }
    user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      const user = await this.findById(userId);
      for (const f in dto) {
        if (dto[f] !== '') {
          user[f] = dto[f];
        }
      }
      return this.userRepo.save(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async validateUser(username: string, pass: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { email: username } });
    if (user && user.password === pass) {
      return user;
    }

    throw new NotFoundException('Email not found.');
  }

  async getUserInfo(userId: string): Promise<UserEntity> {
    return await this.findById(userId);
  }

  async getResume(userId: string): Promise<ResumeEntity> {
    const user = await this.findById(userId);
    let resume = await this.resumeRepo.findOne({
      where: { user: { id: user.id } },
    });

    if (!resume) {
      resume = this.resumeRepo.create({ user });
      await this.resumeRepo.save(resume);
    }

    return resume;
  }

  // Factory pattern
  factoryRepo(type: ResumeType): Repository<any> {
    switch (type) {
      case ResumeType.EDUCATION:
        return this.eduRepo;
      case ResumeType.EMPLOYMENT:
        return this.employmentRepo;
      case ResumeType.PROJECT:
        return this.projectRepo;
      case ResumeType.SKILL:
        return this.skillRepo;
      default:
        return this.resumeRepo;
    }
  }

  async updateResume(userId: string, type: ResumeType, dto: any): Promise<any> {
    const resume = await this.getResume(userId);
    let factoryRepo: Repository<any> = this.factoryRepo(type);

    if (type === ResumeType.HEADLINE) {
      await factoryRepo.update({ id: resume.id }, { headline: dto.headline });
      return;
    }

    let temp;
    if (dto.id) {
      temp = await factoryRepo.findOne({ where: { id: dto.id } });
      for (const f in dto) {
        if (f !== 'id') temp[f] = dto[f];
      }
    } else {
      temp = factoryRepo.create({ ...dto, resume });
    }

    return factoryRepo.save(temp);
  }

  async deleteResume(
    userId: string,
    type: ResumeType,
    id: string,
  ): Promise<any> {
    const resume = await this.getResume(userId);
    let factoryRepo: Repository<any> = this.factoryRepo(type);
    return factoryRepo.delete({ id, resume });
  }

  async uploadAvatar(
    userId: string,
    file: Express.Multer.File,
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    const avatar = await this.uploadService.uploadStream(file);
    user.avatar = avatar.secure_url;
    return this.userRepo.save(user);
  }

  async uploadCV(
    userId: string,
    file: Express.Multer.File,
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    const cv = await this.uploadService.uploadStream(file);
    user.curriculum_vitae = cv.secure_url;
    return this.userRepo.save(user);
  }

  async deleteAllUsers() {
    await this.userRepo.delete({});
  }
}
