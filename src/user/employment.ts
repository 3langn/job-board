import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume';

@Entity('employments')
export class EmploymentEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => ResumeEntity, (resume) => resume.employments)
  resume: ResumeEntity;

  @ApiProperty()
  @Column({ nullable: true })
  designation: string;

  @ApiProperty()
  @Column({ nullable: true })
  organization: string;

  @ApiProperty()
  @Column({ nullable: true })
  is_current_company: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  started_working_year: number;

  @ApiProperty()
  @Column({ nullable: true })
  started_working_month: string;

  @ApiProperty()
  @Column({ nullable: true })
  worked_till_year: number;

  @ApiProperty()
  @Column({ nullable: true })
  worked_till_month: string;

  @ApiProperty()
  @Column({ nullable: true })
  describe_profile: string;
}
