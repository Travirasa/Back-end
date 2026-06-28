import { Module } from '@nestjs/common';
import { TouristPlacesController } from './tourist-places.controller';
import { TouristPlacesService } from './tourist-places.service';

@Module({
  controllers: [TouristPlacesController],
  providers: [TouristPlacesService]
})
export class TouristPlacesModule {}
