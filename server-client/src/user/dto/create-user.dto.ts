import {IsEmail, IsEmpty, IsNotEmpty} from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;
	
	@IsNotEmpty()
	name: string
	
	@IsEmpty()
	remark: string

	avatar?: string
}
