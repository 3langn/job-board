import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from 'src/upload/upload.module';
import { ResumeEntity } from './resume';
import { EmploymentEntity } from './employment';
import { EducationEntity } from './education';
import { SkillsEntity } from './skills';
import { ProjectEntity } from './project';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ResumeEntity,
      EmploymentEntity,
      EducationEntity,
      SkillsEntity,
      ProjectEntity,
    ]),
    UploadModule,
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [
    UserService,
    TypeOrmModule.forFeature([
      UserEntity,
      ResumeEntity,
      EmploymentEntity,
      EducationEntity,
      SkillsEntity,
      ProjectEntity,
    ]),
  ],
})
export class UserModule {}
