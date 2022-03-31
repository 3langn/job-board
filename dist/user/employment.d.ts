import { ResumeEntity } from './resume';
export declare class EmploymentEntity {
    id: string;
    resume: ResumeEntity;
    designation: string;
    organization: string;
    is_current_company: boolean;
    started_working_year: number;
    started_working_month: string;
    worked_till_year: number;
    worked_till_month: string;
    describe_profile: string;
}
