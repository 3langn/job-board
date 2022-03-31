import { UserEntity } from 'src/user/user';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from '../company/company';

@Entity('jobs')
export class JobEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  tags: string;

  @Column()
  type: string;

  @Column()
  exp: number;

  @Column()
  min_salary: number;

  @Column()
  max_salary: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => CompanyEntity, (company) => company.jobs)
  company: CompanyEntity;

  @ManyToMany(() => UserEntity, (user) => user.jobs)
  employments: UserEntity[];
}
