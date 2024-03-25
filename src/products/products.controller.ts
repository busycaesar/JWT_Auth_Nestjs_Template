import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  getProduct(@Param('id') id: number): Product {
    return this.productsService.getProduct(id);
  }

  @Post()
  createProduct(@Body() body): any {
    // Make sure all the required data is received!
    if (!body.title || !body.description || !body.price)
      return { Error: 'Data not found!' };
    const productId = this.productsService.createProduct(
      body.title,
      body.description,
      body.price,
    );
    return { id: productId };
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: number,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ): Product {
    return this.productsService.updateProduct(
      id,
      prodTitle,
      prodDescription,
      prodPrice,
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    if (this.productsService.deleteProduct(parseInt(id)))
      return { Success: 'The product is deleted.' };
    return { Error: 'Internal server error' };
  }
}
