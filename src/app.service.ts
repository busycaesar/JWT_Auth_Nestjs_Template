import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthStatus(): { [key: string]: string } {
    return { author: 'Dev' };
  }
}
