import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { BlogPostCreateDto } from './dto/blog-post.create.dto';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './interfaces/blog-post.interface';
import { Request } from "express";

@Controller('posts')
export class BlogPostController {
  constructor(private blogPostService: BlogPostService) {}

  @Post()
  async create(@Body() blogPostCreateDto: BlogPostCreateDto) {
    let id = this.blogPostService.create(blogPostCreateDto);
    return {id};
  }

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.blogPostService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<BlogPost> {
    const post = this.blogPostService.findOne(parseInt(id));
    if (post) return post;
    throw new HttpException("Not found", HttpStatus.NOT_FOUND);
  }
}