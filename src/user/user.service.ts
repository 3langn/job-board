import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dtos/auth.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async createUser(dto: RegisterDto): Promise<UserEntity> {
    let user = await this.userRepo.findOne({ where: { email: dto.email } });

    if (user) {
      throw new BadRequestException('Email already exists.');
    }
    user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async validateUser(username: string, pass: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { email: username } });
    if (user && user.password === pass) {
      return user;
    }
    throw new NotFoundException('Email not found.');
  }
}
