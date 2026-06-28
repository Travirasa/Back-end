import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TouristCategoriesService } from './tourist-categories.service';
import { Prisma, TouristCategory } from '@prisma/client';

@Controller('tourist-categories')
export class TouristCategoriesController {
  constructor(private readonly touristCategoriesService: TouristCategoriesService) {}

  @Post()
  create(@Body() data: Prisma.TouristCategoryCreateInput): Promise<TouristCategory> {
    return this.touristCategoriesService.create(data);
  }

  @Get()
  findAll(): Promise<TouristCategory[]> {
    return this.touristCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TouristCategory | null> {
    return this.touristCategoriesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.TouristCategoryUpdateInput): Promise<TouristCategory> {
    return this.touristCategoriesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TouristCategory> {
    return this.touristCategoriesService.remove(id);
  }
}
