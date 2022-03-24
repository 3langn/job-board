import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { CloudinaryProvider } from './upload.provider';
import { UploadService } from './upload.service';

@Module({
  controllers: [UploadController],
  providers: [UploadService, CloudinaryProvider],
  exports: [UploadService],
})
export class UploadModule {}
