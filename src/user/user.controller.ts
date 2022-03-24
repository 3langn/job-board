import { Body, Controller, Put, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async updateUser(@Req() req: Request, @Body() dto: UpdateUserDto) {
    return await this.userService.updateUser(req.headers.authorization, dto);
  }
}
