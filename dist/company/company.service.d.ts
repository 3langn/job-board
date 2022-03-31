/// <reference types="multer" />
import { RegisterCompanyDto } from 'src/auth/dtos/auth.dto';
import { UploadService } from 'src/upload/upload.service';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company';
import { UpdateCompanyDto } from './dtos/company.dto';
export declare class CompanyService {
    private companyRepo;
    private readonly uploadService;
    constructor(companyRepo: Repository<CompanyEntity>, uploadService: UploadService);
    createCompany(dto: RegisterCompanyDto): Promise<CompanyEntity>;
    validateCompany(email: string, password: string): Promise<CompanyEntity>;
    findCompanyById(id: string): Promise<CompanyEntity>;
    updateCompany(id: string, data: UpdateCompanyDto): Promise<import("typeorm").UpdateResult>;
    uploadAvatar(company_id: string, file: Express.Multer.File): Promise<CompanyEntity>;
}
