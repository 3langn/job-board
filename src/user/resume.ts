import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EducationEntity } from './education';
import { EmploymentEntity } from './employment';
import { ProjectEntity } from './project';
import { SkillsEntity } from './skills';
import { UserEntity } from './user';

@Entity('resumes')
export class ResumeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ApiProperty()
  @Column({ nullable: true })
  headline: string;

  @ApiProperty({ type: () => EducationEntity })
  @OneToMany((type) => EducationEntity, (education) => education.resume, {
    eager: true,
  })
  educations: EducationEntity[];

  @ApiProperty({ type: () => EmploymentEntity })
  @OneToMany((type) => EmploymentEntity, (employment) => employment.resume, {
    eager: true,
  })
  employments: EmploymentEntity[];

  @OneToOne((type) => UserEntity, (user) => user.resume)
  @JoinColumn()
  user?: UserEntity;

  @ApiProperty({ type: () => SkillsEntity })
  @OneToMany((type) => SkillsEntity, (user) => user.resume, {
    eager: true,
  })
  skills: SkillsEntity[];

  @ApiProperty({ type: () => ProjectEntity })
  @OneToMany((type) => ProjectEntity, (project) => project.resume, {
    eager: true,
  })
  projects: ProjectEntity[];
}
