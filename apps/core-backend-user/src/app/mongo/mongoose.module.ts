import { Module } from '@nestjs/common';
import { MongoBaseService } from './mongo-base.service';

import { MongoService } from './mongo.service';

@Module({
  // Mongo Imports
  imports: [],
  controllers: [],
  providers: [MongoBaseService, MongoService],
})
export class MongoModule {}
