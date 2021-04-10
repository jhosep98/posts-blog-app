import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostBg } from './entities/postBg.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostBg])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
