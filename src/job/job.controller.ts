import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateJobDto } from './dtos/job.dto';
import { JobService } from './job.service';

@ApiTags('Job')
@ApiSecurity('Authorization')
@Controller('job')
export class JobController {
  constructor(private jobSerivce: JobService) {}

  @Get('/')
  async getJobs() {
    return await this.jobSerivce.getJobs();
  }

  @Get('/applied_jobs')
  async getAppliedJobs(@Req() req: Request) {
    return await this.jobSerivce.getAppliedJobs(req.headers.authorization);
  }

  @Get('/applied_employments')
  async getAppliedEmployments(@Req() req: Request) {
    return await this.jobSerivce.getAppliedEmployments(
      req.headers.authorization,
    );
  }

  @Get('/:id')
  async getJob(@Param('id') id: string) {
    return await this.jobSerivce.getJob(id);
  }

  @Get('/company/:company_id')
  async getCompanyJobs(@Param('company_id') id: string) {
    return await this.jobSerivce.getCompanyJobs(id);
  }

  @Post('/')
  async createJob(@Req() req: Request, @Body() createJobDto: CreateJobDto) {
    return await this.jobSerivce.createJob(
      req.headers.authorization,
      createJobDto,
    );
  }

  @Delete('/:id')
  async deleteJob(@Param('id') id: string) {
    return await this.jobSerivce.deleteJob(id);
  }

  @Post('/apply/:id')
  async applyJob(@Param('id') id: string, @Req() req: Request) {
    return await this.jobSerivce.applyJob(id, req.headers.authorization);
  }
}
