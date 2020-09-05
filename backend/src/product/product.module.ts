import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
// this part in mongoose come of integracion con NestJs
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schemas';
@Module({
  imports: [
    // this  is for defined the schema, in array for if created more object
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
