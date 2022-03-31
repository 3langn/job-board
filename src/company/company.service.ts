import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCompanyDto } from 'src/auth/dtos/auth.dto';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepo: Repository<CompanyEntity>,
  ) {}

  async createCompany(dto: RegisterCompanyDto) {
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
}
