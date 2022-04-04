import { ApiProperty } from '@nestjs/swagger';
import { BlogEntity } from 'src/blog/blog';
import { Role } from 'src/common/enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobEntity } from '../job/job';

@Entity('companies')
export class CompanyEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ enum: Role, default: Role.Company })
  type: Role;

  @ApiProperty()
  @Column()
  company_name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column({ nullable: true })
  founded_date: Date;

  @ApiProperty()
  @Column({ nullable: true })
  country: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  phone: string;

  @ApiProperty()
  @Column({ nullable: true })
  city: string;

  @ApiProperty()
  @Column({ nullable: true })
  zip: number;

  @ApiProperty()
  @Column({ nullable: true })
  address: string;

  @ApiProperty()
  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => JobEntity, (job) => job.company)
  jobs: JobEntity[];

  @OneToMany(() => BlogEntity, (blog) => blog.author)
  blogs: BlogEntity[];
}
