import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TouristPlaceCategoriesService } from './tourist-place-categories.service';
import { Prisma, TouristPlaceCategory } from '@prisma/client';

@Controller('tourist-place-categories')
export class TouristPlaceCategoriesController {
  constructor(private readonly touristPlaceCategoriesService: TouristPlaceCategoriesService) {}

  @Post()
  create(@Body() data: Prisma.TouristPlaceCategoryUncheckedCreateInput): Promise<TouristPlaceCategory> {
    return this.touristPlaceCategoriesService.create(data);
  }

  @Get()
  findAll(): Promise<TouristPlaceCategory[]> {
    return this.touristPlaceCategoriesService.findAll();
  }

  @Get(':placeId/:categoryId')
  findOne(
    @Param('placeId') placeId: string,
    @Param('categoryId') categoryId: string,
  ): Promise<TouristPlaceCategory | null> {
    return this.touristPlaceCategoriesService.findOne(placeId, categoryId);
  }

  @Delete(':placeId/:categoryId')
  remove(
    @Param('placeId') placeId: string,
    @Param('categoryId') categoryId: string,
  ): Promise<TouristPlaceCategory> {
    return this.touristPlaceCategoriesService.remove(placeId, categoryId);
  }
}
