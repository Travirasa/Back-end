import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TouristImagesService } from './tourist-images.service';
import { Prisma, TouristImage } from '@prisma/client';

@Controller('tourist-images')
export class TouristImagesController {
  constructor(private readonly touristImagesService: TouristImagesService) {}

  @Post()
  create(@Body() data: Prisma.TouristImageUncheckedCreateInput): Promise<TouristImage> {
    return this.touristImagesService.create(data);
  }

  @Get()
  findAll(): Promise<TouristImage[]> {
    return this.touristImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TouristImage | null> {
    return this.touristImagesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.TouristImageUncheckedUpdateInput): Promise<TouristImage> {
    return this.touristImagesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TouristImage> {
    return this.touristImagesService.remove(id);
  }
}
