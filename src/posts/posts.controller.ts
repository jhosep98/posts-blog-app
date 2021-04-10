import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Response } from 'express';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
    this.postService
      .createPost(createPostDto)
      .then(() => {
        res.status(HttpStatus.CREATED).json({
          message: 'Post created successfully',
          data: createPostDto,
        });
      })
      .catch(() => res.status(HttpStatus.FORBIDDEN));
  }

  @Get()
  getAll(@Res() res: Response) {
    this.postService
      .findAllPosts()
      .then((posts) => {
        res.status(HttpStatus.OK).json({
          data: posts,
        });
      })
      .catch(() => res.status(HttpStatus.FORBIDDEN));
  }
}
