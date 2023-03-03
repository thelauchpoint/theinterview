# Theinterview

So you think you a ready to work on some server code, lets see what you got!

## Development server

Run `npm run start:core` for a dev api server.

## Number 1

Navigate to apps/core-backend-user/src/app/app.service.ts

- We are asking you to write a function to complete the method createList()

- EST TIME TO COMPLETE: 15min
- You can run the server to test on re-compile or use the test.
- Make sure either way the test passes and is useful.

## Number 2

Navigate to apps/core-backend-user/src/app/mongo/backend-schema.model.ts

- We are asking you to create a schema of your choice that you will use to complete further questions.
- Details about the requirements of the schema are in the file you will navigate to.

- EST TIME TO COMPLETE: 10 min

## Number 3

Navigate to apps/core-backend-user/src/app/mongo/mongo-base.service.ts

- We are asking you to write a function to complete the method findById()

- EST TIME TO COMPLETE: 2min
- You can run the server to test

## Number 4

Navigate to apps/core-backend-user/src/app/mongo/mongo.service.ts

- We are asking you to create the constructor for this class and inject the model for your schema

- EST TIME TO COMPLETE: 2min
- You can run the server to test

## Number 5

Navigate to apps/core-backend-user/src/app/mongo/mongo.service.ts

- We are asking you to write the following functions

  - createNewDocumemnt()
  - updateDocumemnt()
  - addToArray()
  - updateItemInArray()
  - addToNestedArray()
  - updateItemInNestedArray()
  - aggregateQuery()

- EST TIME TO COMPLETE: 20min
- You can run the server to test
- To test your methods, you can print the results of your create / update operations OR
  you can use the findById method you created in the base service to find the document
  you created / modified and check that the values are correct.
