import { Schema } from 'mongoose';

/**
 * TODO: Define your own schema to give stucture to the data we plan on storing.
 * Example schema provided at the bottom.
 *
 * Make sure to include at least 1 array and at least 1 nested array. In the example at the bottom,
 * we provide 1 array as an example - the books_rented array and
 * we provide 1 nested array - the authors array inside the books_rented array.
 */
export const BackendSchema = {
  date_rented: { type: Date, required: true },

  /**
   * This is the list of all books rented on the date represented by the date_rented property.
   */
  books_rented: [
    {
      /**
       * Title of the book
       */
      title: { type: String, required: true },

      /**
       * The listed of authors for this book
       */
      authors: [
        {
          first_name: { type: String },
          last_name: { type: String },
        },
      ],
    },
  ],
};

/**
 * THIS IS THE EXAMPLE SCHEMA PROVIDED. DO NOT USE THIS SCHEMA TO ACCOMPLISH ANY LOGIC IN THE SERVICE.
 *
 * An example schema representing a collection of rented books.
 * Each document in the schema represents a single day that books were rented,
 * along with information about the books that were rented.
 *
 * This example schema will be small, the schema you make can be bigger.
 */
export const BookRentalSchema = new Schema({
  ...BackendSchema,
});
