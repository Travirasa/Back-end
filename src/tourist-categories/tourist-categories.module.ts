import { Module } from '@nestjs/common';
import { TouristCategoriesController } from './tourist-categories.controller';
import { TouristCategoriesService } from './tourist-categories.service';

@Module({
  controllers: [TouristCategoriesController],
  providers: [TouristCategoriesService]
})
export class TouristCategoriesModule {}
