import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  @Post()
  createPost(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
    res.status(HttpStatus.CREATED).json({
      message: 'Post created successfully',
      data: createPostDto,
    });
  }
}
