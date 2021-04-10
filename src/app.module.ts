import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostBg } from './posts/entities/postBg.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'prolosolivos98',
      database: 'blogposts',
      entities: [PostBg],
      synchronize: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
