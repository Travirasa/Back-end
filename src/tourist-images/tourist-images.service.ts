import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, TouristImage } from '@prisma/client';

@Injectable()
export class TouristImagesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TouristImageUncheckedCreateInput): Promise<TouristImage> {
    return this.prisma.touristImage.create({ data });
  }

  async findAll(): Promise<TouristImage[]> {
    return this.prisma.touristImage.findMany();
  }

  async findOne(uuid: string): Promise<TouristImage | null> {
    return this.prisma.touristImage.findUnique({ where: { uuid } });
  }

  async update(uuid: string, data: Prisma.TouristImageUncheckedUpdateInput): Promise<TouristImage> {
    return this.prisma.touristImage.update({ where: { uuid }, data });
  }

  async remove(uuid: string): Promise<TouristImage> {
    return this.prisma.touristImage.delete({ where: { uuid } });
  }
}
