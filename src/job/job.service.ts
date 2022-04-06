import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/company';
import { UserEntity } from 'src/user/user';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dtos/job.dto';
import { JobEntity } from './job';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepo: Repository<CompanyEntity>,
    @InjectRepository(JobEntity)
    private jobRepo: Repository<JobEntity>,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async getJobs(
    page: number,
    limit: number,
    title?: string,
    tag?: string,
    type?: string,
    address?: string,
  ) {
    const qb = this.jobRepo
      .createQueryBuilder('job')
      .offset((page - 1) * limit)
      .limit(limit)
      .leftJoinAndSelect('job.company', 'company');

    const qb2 = this.jobRepo
      .createQueryBuilder('job')
      .offset((page - 1) * limit)
      .limit(limit)
      .leftJoinAndSelect('job.company', 'company');

    if (title && title != '') {
      qb.andWhere('job.title ILIKE :title', {
        title: `%${title}%`,
      });
      qb2.andWhere('job.title ILIKE :title', {
        title: `%${title}%`,
      });
    }

    if (address && address != '') {
      qb.andWhere('job.address ILIKE :address', {
        address: `%${address}%`,
      });
      qb2.andWhere('job.address ILIKE :address', {
        address: `%${address}%`,
      });
    }

    if (tag && tag != '') {
      qb2.andWhere('job.tags ILIKE :tag', { tag: `%${tag}%` });

      let jobs = await qb2.getManyAndCount();

      if (jobs[0].length === 0) {
        jobs = await qb
          .andWhere('job.type ILIKE :type', { type: `%${tag}%` })
          .getManyAndCount();
      }

      return {
        jobs: jobs[0],
        total: jobs[1],
      };
    }

    const jobs = await qb.getManyAndCount();

    return {
      jobs: jobs[0],
      total: jobs[1],
    };
  }

  async getJob(id: string) {
    return await this.jobRepo.findOne(id);
  }

  async getCompanyJobs(id: string, page: number, limit: number) {
    return await this.jobRepo.find({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        company: {
          id,
        },
      },
    });
  }

  async getAppliedJobs(user_id: string, page: number, limit: number) {
    return await this.jobRepo
      .createQueryBuilder('job')
      .offset((page - 1) * limit)
      .limit(limit)
      .leftJoin('job.employments', 'user')
      .where('user.id = :user_id', { user_id })
      .getMany();
  }

  async getAppliedEmployments(company_id: string, page: number, limit: number) {
    const jobs = await this.jobRepo
      .createQueryBuilder('job')
      .offset((page - 1) * limit)
      .limit(limit)
      .leftJoin('job.company', 'company')
      .where('company.id = :company_id', { company_id })
      .leftJoinAndSelect('job.employments', 'user')
      .getMany();
    return jobs;
  }

  async createJob(company_id: string, createJobDto: CreateJobDto) {
    const company = await this.companyRepo.findOne({
      where: { id: company_id },
    });
    const job = this.jobRepo.create(createJobDto);
    job.company = company;
    await this.jobRepo.save(job);
  }

  async getOne(id: string) {
    const job = await this.jobRepo.findOne(id);
    if (!job) {
      throw new NotFoundException('Job not found.');
    }
    return job;
  }

  async applyJob(id: string, user_id: string) {
    const job = await this.jobRepo.findOne({ where: { id } });
    const user = await this.userRepo.findOne({ where: { id: user_id } });
    job.employments = job.employments || [];
    job.employments.push(user);
    return await this.jobRepo.save(job);
  }

  async deleteJob(id: string) {
    return await this.jobRepo.remove(await this.getOne(id));
  }
}
