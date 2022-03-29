import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  professional_title: string;
  @ApiProperty()
  languages: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  current_salary: number;
  @ApiProperty()
  expected_salary: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  post_code: number;
  @ApiProperty()
  city: string;
  @ApiProperty()
  full_address: string;
}
