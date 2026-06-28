import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TouristPlacesModule } from './tourist-places/tourist-places.module';
import { TouristCategoriesModule } from './tourist-categories/tourist-categories.module';
import { TouristPlaceCategoriesModule } from './tourist-place-categories/tourist-place-categories.module';
import { TouristImagesModule } from './tourist-images/tourist-images.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    TouristPlacesModule,
    TouristCategoriesModule,
    TouristPlaceCategoriesModule,
    TouristImagesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
