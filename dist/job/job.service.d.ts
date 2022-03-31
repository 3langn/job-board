import { CompanyEntity } from 'src/company/company';
import { UserEntity } from 'src/user/user';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dtos/job.dto';
import { JobEntity } from './job';
export declare class JobService {
    private companyRepo;
    private jobRepo;
    private userRepo;
    constructor(companyRepo: Repository<CompanyEntity>, jobRepo: Repository<JobEntity>, userRepo: Repository<UserEntity>);
    getJobs(): Promise<JobEntity[]>;
    getJob(id: string): Promise<JobEntity>;
    getCompanyJobs(id: string): Promise<JobEntity[]>;
    getAppliedJobs(user_id: string): Promise<JobEntity[]>;
    getAppliedEmployments(company_id: string): Promise<JobEntity[]>;
    createJob(company_id: string, createJobDto: CreateJobDto): Promise<void>;
    applyJob(id: string, user_id: string): Promise<JobEntity>;
    deleteJob(id: string): Promise<import("typeorm").DeleteResult>;
}
