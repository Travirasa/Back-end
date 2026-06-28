import { Module } from '@nestjs/common';
import { TouristPlaceCategoriesController } from './tourist-place-categories.controller';
import { TouristPlaceCategoriesService } from './tourist-place-categories.service';

@Module({
  controllers: [TouristPlaceCategoriesController],
  providers: [TouristPlaceCategoriesService]
})
export class TouristPlaceCategoriesModule {}
