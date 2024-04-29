import {IsEmail, IsEmpty, IsNotEmpty} from 'class-validator';

export class SignInDto {
	@IsNotEmpty()
	@IsEmail()
	user_name: string;  // 这里username作为邮箱来代替

	@IsNotEmpty()
	password: string;
}
