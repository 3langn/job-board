import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ default: 'Job title', description: 'Job title' })
  title: string;

  @ApiProperty({ default: 'Job tags', description: 'Job tags' })
  tags: string;

  @ApiProperty({ default: 'Job type', description: 'Job type' })
  type: string;

  @ApiProperty({ default: '500', description: 'Job exp' })
  exp: number;

  @ApiProperty({ default: 100000, description: 'Job min salary' })
  min_salary: number;

  @ApiProperty({ default: 200000, description: 'Job max salary' })
  max_salary: number;
}
