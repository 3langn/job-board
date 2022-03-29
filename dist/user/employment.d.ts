import { ResumeEntity } from './resume';
export declare class EmploymentEntity {
    id: string;
    resume: ResumeEntity;
    designation: string;
    organization: string;
    is_current_company: boolean;
    started_working_from: Date;
    worked_till: Date;
    describe_profile: string;
}
