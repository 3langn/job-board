import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dtos/company.dto';
@ApiTags('Company')
@ApiSecurity('Authorization')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Put('/')
  async updateCompany(@Req() req: Request, @Body() data: UpdateCompanyDto) {
    return await this.companyService.updateCompany(
      req.headers.authorization,
      data,
    );
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
    return await this.companyService.uploadAvatar(
      req.headers.authorization,
      file,
    );
  }

  @Get('/profile/:id')
  async getProfile(@Param('id') id: string) {
    return await this.companyService.findById(id);
  }
}
