import { BlogEntity } from 'src/blog/blog';
import { ResumeEntity } from './resume';
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
    phone: string;
    country: string;
    post_code: number;
    city: string;
    full_address: string;
    curriculum_vitae: string;
    blogs: BlogEntity[];
    resume: ResumeEntity;
    created_at: Date;
}
