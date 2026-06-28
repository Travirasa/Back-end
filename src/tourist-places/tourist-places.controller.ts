import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TouristPlacesService } from './tourist-places.service';
import { Prisma, TouristPlace } from '@prisma/client';

@Controller('tourist-places')
export class TouristPlacesController {
  constructor(private readonly touristPlacesService: TouristPlacesService) {}

  @Post()
  create(@Body() data: Prisma.TouristPlaceCreateInput): Promise<TouristPlace> {
    return this.touristPlacesService.create(data);
  }

  @Get()
  findAll(): Promise<TouristPlace[]> {
    return this.touristPlacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TouristPlace | null> {
    return this.touristPlacesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.TouristPlaceUpdateInput): Promise<TouristPlace> {
    return this.touristPlacesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TouristPlace> {
    return this.touristPlacesService.remove(id);
  }
}
