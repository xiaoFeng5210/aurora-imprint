import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './core/prisma/prisma.module';
import { ArticleModule } from './src/article/article.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), PrismaModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
