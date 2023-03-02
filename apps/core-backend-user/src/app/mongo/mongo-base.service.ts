import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MongoBaseService {
  /**
   * Logger provided to help with debug
   */
  private baselogger = new Logger(MongoBaseService.name);

  /**
   * The goal here is to implement a very simple find by id method for finding documents in the collection you
   * defined.
   * @param id the id of the document to find
   */
  async findById(id: string) {
    // TODO: Implement
  }
}
