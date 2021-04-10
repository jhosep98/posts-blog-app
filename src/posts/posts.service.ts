import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostBg } from './entities/postBg.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostBg) private postRepository: Repository<PostBg>,
  ) {}

  async createPost(postBg: CreatePostDto) {
    const newPost = await this.postRepository.save(postBg);
    return newPost;
  }
}
