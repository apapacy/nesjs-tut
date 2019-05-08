import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
