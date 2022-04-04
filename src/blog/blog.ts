import { ApiProperty } from '@nestjs/swagger';
import { CompanyEntity } from 'src/company/company';
import { UserEntity } from 'src/user/user';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('blogs')
export class BlogEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  picture: string;

  @ApiProperty()
  @Column()
  headline: string;

  @ApiProperty()
  @Column()
  content: string;

  @ApiProperty({ type: () => CompanyEntity })
  @ManyToOne((type) => CompanyEntity, (c) => c.blogs)
  author: CompanyEntity;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}
