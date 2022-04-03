import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { ResumeType } from './dtos/enum';
import { SkillsDto } from './dtos/skill.dto';
import { UpdateUserDto } from './dtos/user.dto';
import { ResumeEntity } from './resume';
import { SkillsEntity } from './skills';
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

  @Get('/profile/:id')
  async getUserInfo(@Param('id') id: string) {
    console.log(id);

    return await this.userService.getUserInfo(id);
  }

  @Get('/resume')
  async getResume(@Req() req: Request) {
    return await this.userService.getResume(req.headers.authorization);
  }

  @ApiQuery({ name: 'type', enum: ResumeType })
  @Delete('/resume/:id')
  async deleteResume(
    @Param('id') id: string,
    @Req() req: Request,
    @Query('type') type: ResumeType,
  ) {
    return await this.userService.deleteResume(
      req.headers.authorization,
      type,
      id,
    );
  }

  @ApiQuery({ name: 'type', enum: ResumeType })
  @Put('/resume')
  async updateResume(
    @Query('type') type: ResumeType,
    @Req() req: Request,
    @Body() dto: ResumeEntity,
  ) {
    return await this.userService.updateResume(
      req.headers.authorization,
      type,
      dto,
    );
  }

  // @ApiOkResponse({ type: SkillsEntity })
  // @Put('/education')
  // async updateEducation(@Req() req: Request, @Body() dto: SkillsDto[]) {
  //   return await this.userService.updateEducation(req.headers.authorization, dto);
  // }

  // @ApiOkResponse({ type: SkillsEntity })
  // @Put('/skill')
  // async updateResume(@Req() req: Request, @Body() dto: SkillsDto[]) {
  //   return await this.userService.updateSkills(req.headers.authorization, dto);
  // }

  // @ApiOkResponse({ type: SkillsEntity })
  // @Put('/skill')
  // async updateResume(@Req() req: Request, @Body() dto: SkillsDto[]) {
  //   return await this.userService.updateSkills(req.headers.authorization, dto);
  // }

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
