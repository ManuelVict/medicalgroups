import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTalk(): string {
    return 'Jola mi nombre es manuel';
  }

}
