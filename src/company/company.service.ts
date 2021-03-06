import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCompanyDto } from 'src/auth/dtos/auth.dto';
import { UploadService } from 'src/upload/upload.service';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company';
import { UpdateCompanyDto } from './dtos/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepo: Repository<CompanyEntity>,
    private readonly uploadService: UploadService,
  ) {}

  async createEntity(dto: RegisterCompanyDto) {
    let company = await this.companyRepo.findOne({
      where: { email: dto.email },
    });

    if (company) {
      throw new BadRequestException('Email already exists.');
    }
    company = this.companyRepo.create(dto);
    return this.companyRepo.save(company);
  }

  async validateCompany(email: string, password: string) {
    const company = await this.companyRepo.findOne({
      where: { email, password },
    });
    if (!company) {
      throw new BadRequestException('Invalid credentials');
    }
    return company;
  }

  async findById(id: string) {
    const company = await this.companyRepo.findOne({ where: { id } });
    if (!company) {
      throw new BadRequestException('Company not found.');
    }
    return company;
  }

  async updateCompany(id: string, data: UpdateCompanyDto) {
    const company = await this.findById(id);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        company[key] = data[key];
      }
    }
    return this.companyRepo.save(company);
  }

  async uploadAvatar(
    company_id: string,
    file: Express.Multer.File,
  ): Promise<CompanyEntity> {
    const company = await this.findById(company_id);
    const avatar = await this.uploadService.uploadStream(file);
    company.avatar = avatar.secure_url;
    return this.companyRepo.save(company);
  }
}
