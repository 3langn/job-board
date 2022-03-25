import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({ type: () => UserEntity })
  @ManyToOne((type) => UserEntity, (user) => user.blogs)
  author: UserEntity;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}
