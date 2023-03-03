import { Module } from '@nestjs/common';
import { MongoBaseService } from './mongo-base.service';

import { MongoService } from './mongo.service';

@Module({
  // Mongo Imports here
  imports: [],
  controllers: [],
  providers: [MongoBaseService, MongoService],
})
export class MongoModule {}
