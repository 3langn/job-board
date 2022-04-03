/// <reference types="multer" />
import { Request } from 'express';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dtos/company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    updateCompany(id: string, data: UpdateCompanyDto): Promise<import("typeorm").UpdateResult>;
    uploadAvatar(req: Request, file: Express.Multer.File): Promise<import("./company").CompanyEntity>;
    getProfile(id: string): Promise<import("./company").CompanyEntity>;
}
