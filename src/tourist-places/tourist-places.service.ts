import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TouristPlace } from '@prisma/client';

@Injectable()
export class TouristPlacesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TouristPlaceCreateInput): Promise<TouristPlace> {
    return this.prisma.touristPlace.create({ data });
  }

  async findAll(): Promise<TouristPlace[]> {
    return this.prisma.touristPlace.findMany({
      include: {
        categories: {
          include: { category: true }
        },
        images: true
      }
    });
  }

  async findOne(uuid: string): Promise<TouristPlace | null> {
    return this.prisma.touristPlace.findUnique({
      where: { uuid },
      include: {
        categories: {
          include: { category: true }
        },
        images: true
      }
    });
  }

  async update(uuid: string, data: Prisma.TouristPlaceUpdateInput): Promise<TouristPlace> {
    return this.prisma.touristPlace.update({ where: { uuid }, data });
  }

  async remove(uuid: string): Promise<TouristPlace> {
    return this.prisma.touristPlace.delete({ where: { uuid } });
  }
}
