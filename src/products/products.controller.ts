import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): any {
    if (!id) return { Error: 'Invalid Id provided' };
    return this.productsService.getProduct(id);
  }

  @Post()
  createProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ): any {
    // Make sure all the required data is received!
    if (!prodTitle || !prodDescription || !prodPrice)
      return { Error: 'Data not found!' };
    const productId = this.productsService.createProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id: productId };
  }
}
