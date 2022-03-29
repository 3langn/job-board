import { EducationEntity } from './education';
import { EmploymentEntity } from './employment';
import { ProjectEntity } from './project';
import { SkillsEntity } from './skills';
import { UserEntity } from './user';
export declare class ResumeEntity {
    id?: string;
    headline: string;
    educations: EducationEntity[];
    employments: EmploymentEntity[];
    user?: UserEntity;
    skills: SkillsEntity[];
    projects: ProjectEntity[];
}
