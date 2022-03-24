import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiHeaders,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiSecurity('Authorization')
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

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('/profile/avatar')
  async uploadAvatar(
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.userService.uploadAvatar(req.headers.authorization, file);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('/profile/cv')
  async uploadCV(
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.userService.uploadCV(req.headers.authorization, file);
  }
}
