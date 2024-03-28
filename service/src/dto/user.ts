// src/dto/user.ts
import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {

	@Rule(RuleType.string().required().max(100))
	name: string;
	
	@Rule(RuleType.string().empty(''))
	remark: string;
	
	@Rule(RuleType.string().required().email())
	email: string;
	
	@Rule(RuleType.string().required())
	password: string;
	
	@Rule(RuleType.string().allow(''))
	avatar: string | null;

}