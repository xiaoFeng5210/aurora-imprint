// entity/photo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100
	})
	name: string;

	@Column('text')
	description: string;

	@Column()
	filename: string;

	@Column()
	isPublished: boolean;
}