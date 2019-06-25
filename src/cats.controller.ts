
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';


@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('get')
  @ApiResponse({
    status: 200,
    type: CreateCatDto,
    isArray: true
  })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
