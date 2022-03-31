import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserEntity } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import {
  LoginDto,
  MessageResponseDto,
  RegisterCandidateDto,
  RegisterCompanyDto,
} from './dtos/auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
  ) {}

  @ApiOkResponse({ description: 'Ok', type: MessageResponseDto })
  @Post('/register/candidate')
  async register(@Body() dto: RegisterCandidateDto) {
    await this.userService.createUser(dto);
    return {
      message: 'Register successfully.',
    };
  }

  @ApiOkResponse({ description: 'Ok', type: MessageResponseDto })
  @Post('/register/company')
  async registerCompany(@Body() dto: RegisterCompanyDto) {
    await this.companyService.createCompany(dto);
    return {
      message: 'Register successfully.',
    };
  }

  @ApiOkResponse({ description: 'Ok', type: UserEntity })
  @Post('/login/candidate')
  async login(@Body() dto: LoginDto) {
    return await this.userService.validateUser(dto.email, dto.password);
  }

  @ApiOkResponse({ description: 'Ok', type: UserEntity })
  @Post('/login/company')
  async loginCompany(@Body() dto: LoginDto) {
    return await this.companyService.validateCompany(dto.email, dto.password);
  }

  @Delete('/all')
  async deleteAllUsers() {
    await this.userService.deleteAllUsers();
    return {
      message: 'All users deleted successfully',
    };
  }
}
