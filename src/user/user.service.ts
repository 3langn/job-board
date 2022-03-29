import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dtos/auth.dto';
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

  async findUserById(userId: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async createUser(dto: RegisterDto): Promise<UserEntity> {
    let user = await this.userRepo.findOne({ where: { email: dto.email } });

    if (user) {
      throw new BadRequestException('Email already exists.');
    }
    user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      const user = await this.findUserById(userId);
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
    return await this.userRepo.findOne({ where: { id: userId } });
  }

  async getResume(userId: string): Promise<ResumeEntity> {
    const user = await this.findUserById(userId);
    let resume = await this.resumeRepo.findOne({
      where: { user: { id: user.id } },
    });

    if (!resume) {
      resume = this.resumeRepo.create({ user });
      await this.resumeRepo.save(resume);
    }

    return resume;
  }

  async updateResume(
    userId: string,
    type: ResumeType,
    dto: any,
  ): Promise<SkillsEntity[]> {
    const resume = await this.getResume(userId);
    let factoryRepo: Repository<any>;
    const arrayEntity = [];
    switch (type) {
      case ResumeType.EMPLOYMENT:
        factoryRepo = this.employmentRepo;
        break;
      case ResumeType.EDUCATION:
        factoryRepo = this.eduRepo;
        break;
      case ResumeType.PROJECT:
        factoryRepo = this.projectRepo;
        break;
      case ResumeType.SKILL:
        factoryRepo = this.skillRepo;
        break;
      default:
        factoryRepo = this.resumeRepo;
        await factoryRepo.update({ id: resume.id }, { headline: dto.headline });
        return;
    }

    dto.forEach(async (e: any) => {
      if (e.id) {
        const temp = await factoryRepo.findOne({ where: { id: e.id } });
        for (const f in e) {
          if (f !== 'id') temp[f] = e[f];
        }
        arrayEntity.push(temp);
      } else {
        const temp = this.skillRepo.create({ ...e, resume });
        arrayEntity.push(temp);
      }
    });

    return factoryRepo.save(arrayEntity);
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
