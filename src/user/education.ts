import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume';

@Entity('educations')
export class EducationEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => ResumeEntity, (resume) => resume.educations)
  resume: ResumeEntity;

  @ApiProperty()
  @Column({ nullable: true })
  education: string;

  @ApiProperty()
  @Column({ nullable: true })
  course: string;

  @ApiProperty()
  @Column({ nullable: true })
  studied_at: string;
}
