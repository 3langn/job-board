import { Role } from 'src/common/enum';
import { JobEntity } from '../job/job';
export declare class CompanyEntity {
    id: string;
    type: Role;
    company_name: string;
    email: string;
    password: string;
    founded_date: Date;
    country: string;
    description: string;
    phone: string;
    city: string;
    zip: number;
    address: string;
    avatar: string;
    jobs: JobEntity[];
}
