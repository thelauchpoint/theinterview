# Theinterview

So you think you a ready to work on some server code, lets see what you got!

# Connecting to the Database

You'll need to run MongoDB locally to complete some of the tasks below.
Mac install using brew: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-on-macos
Windows install: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

Follow the instructions to get MongoDB running locally.

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
- You'll need to add your schema as an import in 'mongoose.module.ts'

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
