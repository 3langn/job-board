import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from 'src/upload/upload.module';
import { CompanyEntity } from './company';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity]), UploadModule],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService, TypeOrmModule.forFeature([CompanyEntity])],
})
export class CompanyModule {}
