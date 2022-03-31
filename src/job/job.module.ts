import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEntity } from './job';
import { UserModule } from 'src/user/user.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity]), UserModule, CompanyModule],
  providers: [JobService],
  controllers: [JobController],
})
export class JobModule {}
