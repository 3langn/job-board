import { Body, Controller, Get, Put, Query, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiHeader({ name: 'Authorization', description: 'User id' })
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async updateUser(@Req() req: Request, @Body() dto: UpdateUserDto) {
    return await this.userService.updateUser(req.headers.authorization, dto);
  }

  @Get('/profile')
  async getUserInfo(@Req() req: Request) {
    return await this.userService.getUserInfo(req.headers.authorization);
  }
}
