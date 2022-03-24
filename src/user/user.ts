import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  professional_title: string;

  @Column({ nullable: true })
  languages: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  current_salary: number;

  @Column({ nullable: true })
  expected_salary: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  post_code: number;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  full_address: string;

  @Column({ nullable: true })
  curriculum_vitae: string;
  // @Column({ nullable: true })
  // skills: string;
}
