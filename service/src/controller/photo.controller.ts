import {Controller, Get, Inject} from '@midwayjs/core';
import {PhotoService} from "../service/photo.service";
import {Context} from "@midwayjs/koa";
import {Photo} from "../entity/photo.entity";

@Controller('/photo')
export class HomeController {
	@Inject()
	ctx: Context;
	
	@Inject()
	photoService: PhotoService;
	
	@Get('/all')
	async getAllPhotos(): Promise<Photo[]> {
		return await this.photoService.getPhotos();
	}
	
	@Get('/')
	async getPhoto(): Promise<Photo> {
		const photo = {
			name: 'xiaofeng',
			description: 'this is a photo',
			filename: 'photo.jpg',
			isPublished: true,
		};
		return await this.photoService.savePhoto(photo);
	}
}
