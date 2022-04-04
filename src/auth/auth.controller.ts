import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserEntity } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
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
    private readonly authService: AuthService,
  ) {}

  @ApiOkResponse({ description: 'Ok', type: MessageResponseDto })
  @Post('/register')
  async register(@Body() dto, @Query('type') type: Role) {
    switch (type) {
      case Role.Candidate:
        await this.userService.createEntity(dto);
      case Role.Company:
        await this.companyService.createEntity(dto);
    }

    return {
      message: 'Register successfully',
    };
  }

  @ApiOkResponse({ description: 'Ok', type: UserEntity })
  @ApiQuery({
    name: 'role',
    required: true,
    enum: Role,
    description: 'Role',
  })
  @Post('/login')
  async login(@Body() dto: LoginDto, @Query('role') role: Role) {
    return await this.authService.login(dto.email, dto.password, role);
  }

  @Delete('/all')
  async deleteAllUsers() {
    await this.userService.deleteAllUsers();
    return {
      message: 'All users deleted successfully',
    };
  }
}
