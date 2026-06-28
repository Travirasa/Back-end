import { Module } from '@nestjs/common';
import { TouristImagesController } from './tourist-images.controller';
import { TouristImagesService } from './tourist-images.service';

@Module({
  controllers: [TouristImagesController],
  providers: [TouristImagesService]
})
export class TouristImagesModule {}
