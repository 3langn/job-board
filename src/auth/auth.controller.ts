import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { LoginDto, MessageResponseDto, RegisterDto } from './dtos/auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ description: 'Ok', type: MessageResponseDto })
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    await this.userService.createUser(dto);
    return {
      message: 'Register successfully.',
    };
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.userService.validateUser(dto.email, dto.password);
  }
}
