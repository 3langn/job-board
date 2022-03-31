import { Role } from 'src/common/enum';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ enum: Role, default: Role.Company })
  type: Role;

  @Column()
  company_name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
