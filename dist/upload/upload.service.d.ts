/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class UploadService {
    uploadFilesToCloudinary(files: Array<Express.Multer.File>): Promise<(UploadApiResponse | UploadApiErrorResponse)[]>;
    uploadImage(files: Array<Express.Multer.File>): Promise<(UploadApiResponse | UploadApiErrorResponse)[]>;
    uploadStream(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
