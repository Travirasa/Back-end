import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TouristPlaceCategory } from '@prisma/client';

@Injectable()
export class TouristPlaceCategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TouristPlaceCategoryUncheckedCreateInput): Promise<TouristPlaceCategory> {
    return this.prisma.touristPlaceCategory.create({ data });
  }

  async findAll(): Promise<TouristPlaceCategory[]> {
    return this.prisma.touristPlaceCategory.findMany();
  }

  async findOne(tourist_place_id: string, category_id: string): Promise<TouristPlaceCategory | null> {
    return this.prisma.touristPlaceCategory.findUnique({
      where: {
        tourist_place_id_category_id: {
          tourist_place_id,
          category_id
        }
      }
    });
  }

  async remove(tourist_place_id: string, category_id: string): Promise<TouristPlaceCategory> {
    return this.prisma.touristPlaceCategory.delete({
      where: {
        tourist_place_id_category_id: {
          tourist_place_id,
          category_id
        }
      }
    });
  }
}
