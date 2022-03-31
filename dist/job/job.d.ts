import { UserEntity } from 'src/user/user';
import { CompanyEntity } from '../company/company';
export declare class JobEntity {
    id: string;
    title: string;
    tags: string;
    type: string;
    exp: number;
    min_salary: number;
    max_salary: number;
    created_at: Date;
    updated_at: Date;
    company: CompanyEntity;
    employments: UserEntity[];
}
