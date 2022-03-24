import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config, DatabaseConfig } from './config/database';
import { ConfigModule } from '@nestjs/config';
import { UploadController } from './upload/upload.controller';
import { UploadModule } from './upload/upload.module';

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
  ],
  controllers: [UploadController],
})
export class AppModule {}
