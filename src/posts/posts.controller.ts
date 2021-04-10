import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
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

  @Get(':id')
  getOne(@Res() res: Response, @Param('id') id: string) {
    this.postService
      .findOnePost(id)
      .then((post) => {
        res.status(HttpStatus.OK).json({
          data: post,
        });
      })
      .catch(() => res.status(HttpStatus.FORBIDDEN));
  }

  @Put(':id')
  update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    this.postService
      .updatePost(id, createPostDto)
      .then((post) => {
        res.status(HttpStatus.OK).json({
          message: 'Post updated successfully',
          post,
        });
      })
      .catch(() => res.status(HttpStatus.FORBIDDEN));
  }

  @Delete(':id')
  delete(@Res() res: Response, @Param('id') id: string) {
    this.postService
      .deletePost(id)
      .then((post) => {
        res.status(HttpStatus.OK).json({
          message: 'Post deleted successfully',
          post,
        });
      })
      .catch(() => res.status(HttpStatus.FORBIDDEN));
  }
}
