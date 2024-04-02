import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import {PrismaModule} from "../core/prisma/prisma.module";
import {PrismaService} from "../core/prisma/prisma.service";

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService],
  imports: [PrismaModule]
})
export class ArticleModule {}
