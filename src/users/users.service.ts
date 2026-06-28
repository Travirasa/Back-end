import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(uuid: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { uuid } });
  }

  async update(uuid: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { uuid }, data });
  }

  async remove(uuid: string): Promise<User> {
    return this.prisma.user.delete({ where: { uuid } });
  }
}
