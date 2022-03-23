export declare const config: () => {
    port: string;
    database: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        migrationsTableName: string;
        autoLoadEntities: boolean;
        migrations: string[];
        subscribers: string[];
    };
};
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export declare class DatabaseConfig implements TypeOrmOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
