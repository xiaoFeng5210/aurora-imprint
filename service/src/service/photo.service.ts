import {Provide} from '@midwayjs/core';
import {InjectEntityModel} from '@midwayjs/typeorm';
import {Photo} from '../entity/photo.entity';
import {Repository} from 'typeorm';

@Provide()
export class PhotoService {
	
  @InjectEntityModel(Photo)
	photoModel: Repository<Photo>;
	
	async getPhotos() {
		return await this.photoModel.find();
	}
	
	async savePhoto(photo: Omit<Photo, 'id'>) {
		return await this.photoModel.save(photo);
	}
}