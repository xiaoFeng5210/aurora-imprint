import {IsEmail, IsEmpty, IsNotEmpty} from 'class-validator';

export class LoginDto {
	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	user_name: string
}
