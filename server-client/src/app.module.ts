import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './core/prisma/prisma.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, PrismaModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
