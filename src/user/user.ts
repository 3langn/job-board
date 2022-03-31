import { ApiProperty } from '@nestjs/swagger';
import { BlogEntity } from 'src/blog/blog';
import { Role } from 'src/common/enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResumeEntity } from './resume';

@Entity('users')
export class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ enum: Role, default: Role.Candidate })
  type: Role;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  email: string;

  @Column()
  password: string;

  @ApiProperty()
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty()
  @Column({ nullable: true })
  professional_title: string;

  @ApiProperty()
  @Column({ nullable: true })
  languages: string;

  @ApiProperty()
  @Column({ nullable: true })
  age: number;

  @ApiProperty()
  @Column({ nullable: true })
  current_salary: number;

  @ApiProperty()
  @Column({ nullable: true })
  expected_salary: number;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  phone: string;

  @ApiProperty()
  @Column({ nullable: true })
  country: string;

  @ApiProperty()
  @Column({ nullable: true })
  post_code: number;

  @ApiProperty()
  @Column({ nullable: true })
  city: string;

  @ApiProperty()
  @Column({ nullable: true })
  full_address: string;

  @ApiProperty()
  @Column({ nullable: true })
  curriculum_vitae: string;
  // @Column({ nullable: true })
  // skills: string;

  @OneToMany((type) => BlogEntity, (blog) => blog.author)
  blogs: BlogEntity[];

  @OneToOne(() => ResumeEntity, (resume) => resume.user, {
    eager: true,
  })
  @JoinColumn()
  resume: ResumeEntity;

  @CreateDateColumn()
  created_at: Date;
}
