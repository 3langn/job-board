import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
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
  constructor(private jobService: JobService) {}

  @Get('/')
  async getJobs(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('title') title?: string,
    @Query('tag') tag?: string,
    @Query('type') type?: string,
    @Query('address') address?: string,
  ) {
    return await this.jobService.getJobs(
      page,
      limit,
      title,
      tag,
      type,
      address,
    );
  }

  @Get('/applied_jobs')
  async getAppliedJobs(
    @Req() req: Request,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.jobService.getAppliedJobs(
      req.headers.authorization,
      page,
      limit,
    );
  }

  @Get('/applied_employments')
  async getAppliedEmployments(
    @Req() req: Request,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.jobService.getAppliedEmployments(
      req.headers.authorization,
      page,
      limit,
    );
  }

  @Get('/:id')
  async getJob(@Param('id') id: string) {
    return await this.jobService.getJob(id);
  }

  @Get('/company/:company_id')
  async getCompanyJobs(
    @Param('company_id') id: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.jobService.getCompanyJobs(id, page, limit);
  }

  @Post('/')
  async createJob(@Req() req: Request, @Body() createJobDto: CreateJobDto) {
    return await this.jobService.createJob(
      req.headers.authorization,
      createJobDto,
    );
  }

  @Delete('/:id')
  async deleteJob(@Param('id') id: string) {
    return await this.jobService.deleteJob(id);
  }

  @Post('/apply/:id')
  async applyJob(@Param('id') id: string, @Req() req: Request) {
    return await this.jobService.applyJob(id, req.headers.authorization);
  }
}
