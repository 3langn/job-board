export const config = () => ({
  port: process.env.PORT,
  database: {
    type: 'postgres',
    url: process.env.ENV === 'prod' ? process.env.DATABASE_URL : null,
    ssl: {
      rejectUnauthorized: false,
    },
    host: process.env.ENV !== 'prod' ? process.env.DB_HOST : null,
    port: process.env.ENV !== 'prod' ? process.env.DB_PORT : null,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    migrationsTableName: 'migrations',
    autoLoadEntities: true,
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
  },
});

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const databaseConfig = 'database';
    return this.configService.get(databaseConfig);
  }
}
