import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterCandidateDto {
  @ApiProperty({ default: 'Username', description: 'Username' })
  username: string;

  @ApiProperty({ default: 'myacount@email.com' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ default: 'password', description: 'Password' })
  @IsNotEmpty()
  password: string;
}

export class RegisterCompanyDto {
  @ApiProperty({ default: 'Google', description: 'company name' })
  company_name: string;

  @ApiProperty({ default: 'google@email.com' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ default: 'password', description: 'Password' })
  @IsNotEmpty()
  password: string;
}

export class LoginDto {
  @ApiProperty({ default: 'myacount@email.com', description: 'Email' })
  email: string;

  @ApiProperty({ default: 'password', description: 'Password' })
  password: string;
}

export class MessageResponseDto {
  @ApiProperty({ default: 'Success', description: 'Success' })
  success: string;
}
