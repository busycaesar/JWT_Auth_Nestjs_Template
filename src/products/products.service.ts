import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts() {
    return [...this.products];
  }

  getProduct(id: number) {
    const product = this.products.find((product) => product.id == id);
    return product;
  }

  createProduct(title: string, description: string, price: number): number {
    const newProductId: number = new Date().getTime();
    const newProduct = new Product(newProductId, title, description, price);
    this.products.push(newProduct);
    return newProductId;
  }
}
