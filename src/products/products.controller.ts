import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ): { id: number } {
    const productId = this.productsService.createProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id: productId };
  }
}
