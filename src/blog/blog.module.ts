import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from 'src/company/company.module';
import { UserModule } from 'src/user/user.module';
import { BlogEntity } from './blog';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity]), UserModule, CompanyModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
