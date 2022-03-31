import { Request } from 'express';
import { CreateJobDto } from './dtos/job.dto';
import { JobService } from './job.service';
export declare class JobController {
    private jobSerivce;
    constructor(jobSerivce: JobService);
    getJobs(): Promise<import("./job").JobEntity[]>;
    getAppliedJobs(req: Request): Promise<import("./job").JobEntity[]>;
    getAppliedEmployments(req: Request): Promise<import("./job").JobEntity[]>;
    getJob(id: string): Promise<import("./job").JobEntity>;
    getCompanyJobs(id: string): Promise<import("./job").JobEntity[]>;
    createJob(req: Request, createJobDto: CreateJobDto): Promise<void>;
    deleteJob(id: string): Promise<import("typeorm").DeleteResult>;
    applyJob(id: string, req: Request): Promise<import("./job").JobEntity>;
}
