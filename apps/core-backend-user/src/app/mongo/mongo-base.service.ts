import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MongoBaseService {
  /**
   * Logger provided to help with debug
   */
  private baselogger = new Logger(MongoBaseService.name);
}
