import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDatabaseModule } from './mongo-setup/mongo-database.module';
import { MongoModule } from './mongo/mongoose.module';

@Module({
  imports: [MongoModule, MongoDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
