import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  bindName(name: string) {
    return `Hello ${name}!`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
