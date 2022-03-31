import { Role } from 'src/common/enum';
import { CompanyService } from 'src/company/company.service';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly companyService;
    constructor(userService: UserService, companyService: CompanyService);
    login(email: string, password: string, role: Role): Promise<import("../user/user").UserEntity | import("../company/company").CompanyEntity>;
}
