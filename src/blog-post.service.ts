import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/blog-post.interface';
import { BlogPostCreateDto } from './dto/blog-post.create.dto';

@Injectable()
export class BlogPostService {
  private readonly posts: BlogPost[] = [
    {
      id: 1,
      title: "Just a little test post",
      description: "This post is just a hardcoded example to use for testing.",
      text: "This is the text of my awesome blog post!",
      image: "test.jpg",
      author: "Fridrik Juliusson",
      created: "2023-05-08T02:12:57.890Z"
    }
  ];
  
  create(postCreateDto: BlogPostCreateDto) {
    const newPost: BlogPost = {
      ...postCreateDto,
      id: Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER),
      created: new Date().toISOString().substring(0, 10)
    }
    this.posts.push(newPost);
    return newPost.id;
  }

  findAll(): BlogPost[] {
    return this.posts.sort((a,b) => a.created > b.created ? -1 : a.created < b.created ? 1 : 0);
  }

  findOne(id: number): BlogPost | null {
    const post = this.posts.find((p) => p.id === id);
    return post ?? null;
  }
}