import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  // Aqui solo utilizaremos los metodos para utilizarlos en los controladores.
  // se inyectara un modelo de esta clase definido en product.model
  //sera de tipo Model y se basar en Product que es nuestra interfaz, Model<Product>
  constructor(@InjectModel('Product') readonly productModel: Model<Product>) {}

  // obtener array of products
  // Get all products
  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  // Get a single Product
  async getProduct(productID: string): Promise<Product> {
    const product = await this.productModel.findById(productID);
    return product;
  }

  // Post a single product
  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(createProductDTO);
    return newProduct.save();
  }
  // Delete Product
  async deleteProduct(productID: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productID);
    return deletedProduct;
  }

  // Put a single product
  async updateProduct(
    productID: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
