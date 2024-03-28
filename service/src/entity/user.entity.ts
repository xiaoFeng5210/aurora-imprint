import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	uid: number;

	@Column({
		length: 100
	})
	name: string;
  
	@Column()
	remark: string;
	
	@Column()
	email: string;
	
	@Column()
	password: string;
	
	@Column()
	avatar: string | null;
	
	@CreateDateColumn()
	create_time: number;
	
	@UpdateDateColumn()
	update_time: number;
}