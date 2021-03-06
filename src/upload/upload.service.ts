import { BadRequestException, Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { Readable } from 'typeorm/platform/PlatformTools';

@Injectable()
export class UploadService {
  async uploadFilesToCloudinary(
    files: Array<Express.Multer.File>,
  ): Promise<(UploadApiResponse | UploadApiErrorResponse)[]> {
    return await this.uploadImage(files).catch((e) => {
      console.log(e);

      throw new BadRequestException(e.message);
    });
  }

  async uploadImage(files: Array<Express.Multer.File>) {
    return Promise.all(files.map((file) => this.uploadStream(file)));
  }

  async uploadStream(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
        });
        Readable.from(file.buffer).pipe(upload);
      });
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error.message);
    }
  }
}
