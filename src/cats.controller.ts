import { Controller, Get, Post, Param, Query, Body, Res, Next } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

interface Params {
  field: number;
  a: Len;
}

interface Len {
    length: number;
}

@Controller('cats')
export class CatsController {

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() params: Params, @Res() res, @Next() next: Function): string {
    console.log(params.a.length);
    res.status(201).send('All Ok');
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

}
