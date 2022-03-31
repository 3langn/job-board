import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserEntity } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto, RegisterCandidateDto, RegisterCompanyDto } from './dtos/auth.dto';
export declare class AuthController {
    private readonly userService;
    private readonly companyService;
    private readonly authService;
    constructor(userService: UserService, companyService: CompanyService, authService: AuthService);
    register(dto: RegisterCandidateDto): Promise<{
        message: string;
    }>;
    registerCompany(dto: RegisterCompanyDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto, role: Role): Promise<UserEntity | import("../company/company").CompanyEntity>;
    deleteAllUsers(): Promise<{
        message: string;
    }>;
}
