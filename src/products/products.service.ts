import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  private findProduct(id: number): Product {
    const product = this.products.find((product) => product.id == id);
    if (!product) throw new NotFoundException('Invalid product id');
    return product;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProduct(id: number): Product {
    const product = this.findProduct(id);
    return { ...product };
  }

  createProduct(title: string, description: string, price: number): number {
    const newProductId: number = new Date().getTime();
    const newProduct = new Product(newProductId, title, description, price);
    this.products.push(newProduct);
    return newProductId;
  }

  updateProduct(
    id: number,
    title: string,
    description: string,
    price: number,
  ): Product {
    const product = this.findProduct(id);
    product.title = title || product.title;
    product.description = description || product.description;
    product.price = price || product.price;
    return { ...product };
  }

  deleteProduct(id: number) {
    console.log(this.products);
    this.products = this.products.filter((product) => {
      console.log(typeof id);
      console.log(typeof product.id);
      return product.id !== id;
    });
    console.log(this.products);
    if (!this.findProduct(id)) return true;
    return false;
  }
}
