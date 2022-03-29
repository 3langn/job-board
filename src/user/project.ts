import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume';

@Entity('projects')
export class ProjectEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ nullable: true })
  project_title: string;

  @ApiProperty()
  @Column({ nullable: true })
  details_of_project: string;

  @ManyToOne((type) => ResumeEntity, (resume) => resume.projects)
  resume: ResumeEntity;
}
