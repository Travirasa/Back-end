import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TouristCategory } from '@prisma/client';

@Injectable()
export class TouristCategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TouristCategoryCreateInput): Promise<TouristCategory> {
    return this.prisma.touristCategory.create({ data });
  }

  async findAll(): Promise<TouristCategory[]> {
    return this.prisma.touristCategory.findMany();
  }

  async findOne(uuid: string): Promise<TouristCategory | null> {
    return this.prisma.touristCategory.findUnique({ where: { uuid } });
  }

  async update(uuid: string, data: Prisma.TouristCategoryUpdateInput): Promise<TouristCategory> {
    return this.prisma.touristCategory.update({ where: { uuid }, data });
  }

  async remove(uuid: string): Promise<TouristCategory> {
    return this.prisma.touristCategory.delete({ where: { uuid } });
  }
}
