import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  createProduct(title: string, description: string, price: number): number {
    const newProductId: number = new Date().getTime();
    const newProduct = new Product(newProductId, title, description, price);
    this.products.push(newProduct);
    return newProductId;
  }
}
