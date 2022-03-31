import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
  ) {}
  // TODO: Use factory pattern to create user and company service
  async login(email: string, password: string, role: Role) {
    if (role === Role.Candidate) {
      return await this.userService.validateUser(email, password);
    } else if (role === Role.Company) {
      return await this.companyService.validateCompany(email, password);
    }
  }
}
