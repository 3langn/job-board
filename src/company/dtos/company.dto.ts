import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto {
  @ApiProperty({ default: 'Google', description: 'company name' })
  company_name: string;

  @ApiProperty({ default: 'google@gmail.com' })
  email: string;

  @ApiProperty({ default: '1234567' })
  password: string;

  @ApiProperty()
  founded_date: string;

  @ApiProperty({ default: 'Ameria' })
  country: string;

  @ApiProperty({ default: 'Best company' })
  description: string;

  @ApiProperty({ default: '01111111111' })
  phone: string;

  @ApiProperty({ default: 'Los Angeles' })
  city: string;

  @ApiProperty({ default: '123' })
  zip: number;

  @ApiProperty({ default: 'Los Angeles' })
  address: string;

  @ApiProperty({ default: 'abc' })
  avatar: string;
}
