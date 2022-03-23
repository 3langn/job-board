import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dtos/auth.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/user.dto';
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

  async updateUser(userId: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      const user = await this.userRepo.findOne({ where: { id: userId } });
      for (const f in dto) {
        if (dto[f] !== '') {
          user[f] = dto[f];
        }
      }
      return this.userRepo.save(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async validateUser(username: string, pass: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { email: username } });
    if (user && user.password === pass) {
      return user;
    }
    throw new NotFoundException('Email not found.');
  }
}
