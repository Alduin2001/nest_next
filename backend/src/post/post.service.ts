import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createPostDto: CreatePostDto) {
    try {
      const {header,body} = createPostDto;
      const post = await this.prisma.post.create({data:{
        header,
        body
      }});
      if(!post){
        throw new BadRequestException('Не удалось добавить пост');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const posts = await this.prisma.post.findMany();
      console.log(posts);
      return {posts};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
