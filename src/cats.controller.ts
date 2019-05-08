import { Controller, Get, HttpCode, Query } from '@nestjs/common';

interface Params {
  field: number;
}

@Controller('cats')
export class CatsController {
  @HttpCode(201)
  @Get('all')
  findAll(@Query() params: Params): string {
    console.log(params);
    return 'This action returns all cats';
  }
}
