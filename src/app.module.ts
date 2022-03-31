import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config, DatabaseConfig } from './config/database';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { BlogModule } from './blog/blog.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfig }),
    UploadModule,
    BlogModule,
    CompanyModule,
  ],
})
export class AppModule {}
