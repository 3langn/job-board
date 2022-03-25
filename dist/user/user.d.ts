import { BlogEntity } from 'src/blog/blog';
export declare class UserEntity {
    id: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    professional_title: string;
    languages: string;
    age: number;
    current_salary: number;
    expected_salary: number;
    description: string;
    phone: number;
    country: string;
    post_code: number;
    city: string;
    full_address: string;
    curriculum_vitae: string;
    blogs: BlogEntity[];
}
