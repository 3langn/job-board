import { UserEntity } from 'src/user/user';
export declare class BlogEntity {
    id: string;
    title: string;
    picture: string;
    headline: string;
    content: string;
    author: UserEntity;
    created_at: Date;
    updated_at: Date;
}
