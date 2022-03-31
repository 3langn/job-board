import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume';

@Entity('skills')
export class SkillsEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ nullable: true })
  skill: string;

  @ApiProperty()
  @Column({ nullable: true })
  experience: number;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ManyToOne((type) => ResumeEntity, (resume) => resume.skills)
  resume: ResumeEntity;
}
