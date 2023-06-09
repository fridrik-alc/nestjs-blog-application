import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';

@Module({
  imports: [],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class AppModule {}
