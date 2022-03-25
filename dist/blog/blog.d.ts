import { UserEntity } from 'src/user/user';
export declare class BlogEntity {
    id: string;
    title: string;
    content: string;
    author: UserEntity;
}
