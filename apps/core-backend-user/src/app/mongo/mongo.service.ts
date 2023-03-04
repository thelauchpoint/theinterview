import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoBaseService } from './mongo-base.service';

/**
 * This service holds outlines of several methods you are to implement.
 * The base service that this service extends also has a method you need to implement.
 */
@Injectable()
export class MongoService extends MongoBaseService {
  /**
   * Logger provided to help with debug
   */
  private logger = new Logger(MongoService.name);

  // TODO: Inject needed models through constructor (don't forget to import)

  /**
   * Takes in required (and possibly optional) data and uses it to create a new
   * document in the MongoDB collection that matches up with the schema created from the 'backend-schema.model' file
   * @param data The data required to make a new document in the MongoDB collection
   *
   *
   * The goal here is simply to add a new document to the collection you defined in 'backend-schema.model'
   * The documents you add via this method will be used in later methods.
   *
   * TIPS
   * Remember which properties you set as required in the schema
   */
  async createNewDocument(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   * Takes in updated data and uses it to update a
   * document in the MongoDB collection that matches up with the schema created from the 'backend-schema.model' file
   * @param data The data we want updated in the database.
   *
   *
   * The goal here is to update certain properties of a single document in the collection you defined.
   * You should only need to use a single call to the update method from mongoose.
   */
  async updateDocument(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   * @param data The data needed to add an entry to an array on a single document.
   * In the example schema provided, this would be the equivalent of adding an entry to the
   * "books_rented" array.
   *
   * The goal here is to add a single entry to the array you defined in your schema.
   */
  async addToArray(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   *
   * @param data The data needed to update a single member of the array you defined in your schema.
   *
   * In the example schema provided, this would be the equivalent of updating a single book rented from the
   * "books_rented" array, like changing the title.
   *
   * The goal here is to update a single element of an array on a single document in the collection.
   */
  async updateItemInArray(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   * @param data The data needed to add an entry to a nested array on a single document.
   * In the example schema provided, this would be the equivalent of adding an entry to the
   * "authors" array that is nested inside the "books_rented" array.
   *
   * The goal here is to add a single entry to the nested array you defined in your schema.
   */
  async addToNestedArray(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   *
   * @param data The data needed to update a single member of the nested array you defined in your schema.
   *
   * In the example schema provided, this would be the equivalent of updating an author's first or last name
   * on a single item in the "authors" array that is nested inside the "books_rented" array.
   *
   * The goal here is to update a single element of a nested array on a single document in the collection.
   *
   * TIPS
   * Remember that to accomplish this update, you'll need some way to identify a single entry in the "books_rented" array
   * as well as a single entry in the "authors" array
   */
  async updateItemInNestedArray(data: Record<string, unknown>) {
    // TODO: Implement
  }

  /**
   * The goal here is to create some aggregate query of your choice.
   * We'd like to see a group stage and to get some meaningful information from the
   * results of the query.
   *
   * One example of a useful query:
   * Based on a MongoDB collection of books that have been rented,
   * a useful query may be something like "the average number of times a book is rented each month"
   *
   * What you can provide depends on what you've defined in the schema, so make sure you've given yourself enough
   * information to work with.
   */
  async aggregateQuery() {
    // TODO: Implement
  }
}
