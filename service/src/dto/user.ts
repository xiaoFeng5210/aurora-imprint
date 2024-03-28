// src/dto/user.ts
import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
	@Rule(RuleType.number().required())
	uid: number;

	@Rule(RuleType.string().required().max(100))
	name: string;
	
	@Rule(RuleType.string().required().max(300))
	remark: string;
	
	@Rule(RuleType.string().required().email())
	email: string;
	
	@Rule(RuleType.string().required())
	password: string;
	
	@Rule(RuleType.string().allow(null))
	avatar: string | null;

}